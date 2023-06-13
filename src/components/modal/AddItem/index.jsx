import styles from "./AddItem.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useState } from "react";
import { createItem } from "../../../http/itemApi";
import { useSelector } from "react-redux";
import { selectTypeIdByName } from "../../../features/types/typeSlice";

export default function AddItem({ onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);

  const typeId = useSelector((state) => selectTypeIdByName(state, type));

  const addItem = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", `${price}`);
    if (typeId) {
      formData.append("typeId", `${typeId}`);
    } else alert("Вказаного типу не існує!");
    formData.append("img", file);
    createItem(formData)
      .then((data) => {
        setName("");
        setDescription("");
        setPrice("");
        setType("");
        setFile(null);
        onClose();
      })
      .catch((error) => {
        if (error.response.status === 404)
          alert("Товар з вказаною назвою вже існує!");
        else alert("Сталася помилка.");
      });
  };

  return (
    <div className={styles.container}>
      <h1>Додати товар</h1>
      <form>
        <Input
          placeholder="Назва товару"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <Input
            placeholder="Назва типу"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <Input
            placeholder="Вартість"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Опис товару"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="file"
          accept=".jpg, .jpeg, .png"
          required
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <Button onClick={addItem}>Додати</Button>
      </form>
      <button onClick={onClose}>✕</button>
    </div>
  );
}
