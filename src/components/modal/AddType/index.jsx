import styles from "./AddType.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useState } from "react";
import { createType } from "../../../http/itemApi";

export default function AddType({ onClose }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [file, setFile] = useState(null);

  const addType = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('nameUrl', latinName)
    formData.append('img', file)
    createType(formData).then((data) => {
      setName("");
      setLatinName("");
      setFile(null);
      onClose();
    });
  };

  return (
    <div className={styles.container}>
      <h1>Додати тип</h1>
      <form action="">
        <Input
          placeholder="Назва типу"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Назва типу латинскою"
          required
          value={latinName}
          onChange={(e) => setLatinName(e.target.value)}
        />
        <Input
          type="file"
          accept=".jpg, .jpeg, .png"
          required
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <Button onClick={(e) => addType(e)}>Додати</Button>
      </form>
      <button onClick={onClose}>✕</button>
    </div>
  );
}
