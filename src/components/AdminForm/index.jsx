import { useState } from "react";
import Button from "../UI/Button";
import styles from "./AdminForm.module.css";
import AddType from "../modal/AddType";
import AddItem from "../modal/AddItem";

export default function AdminForm() {
  const [typeVisible, setTypeVisible] = useState(false);
  const [itemVisible, setItemVisible] = useState(false);

  const openTypeModal = () => {
    setTypeVisible(true);
  };

  const openItemModal = () => {
    setItemVisible(true);
  };

  const closeTypeModal = () => {
    setTypeVisible(false);
  };

  const closeItemModal = () => {
    setItemVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {typeVisible && <AddType onClose={closeTypeModal} />}
        {itemVisible && <AddItem onClose={closeItemModal} />}
        {!typeVisible && !itemVisible && (
          <>
            <Button onClick={openTypeModal}>Додати тип</Button>
            <Button onClick={openItemModal}>Додати товар</Button>
          </>
        )}
      </div>
    </div>
  );
}
