import { useState, useEffect } from "react";
import styles from "./Sort.module.css";

export default function Sort({ onSortChange }) {
  const [sortBy, setSortBy] = useState("");
  const [sortDir, setSortDir] = useState("");

  useEffect(() => {
    if (sortBy !== undefined && sortDir !== undefined) {
      onSortChange(sortBy, sortDir);
    }
  }, [sortBy, sortDir, onSortChange]);

  const handleSelectChange = (e) => {
    const selectedSortDir = e.target.value;
    setSortDir(selectedSortDir);
    if (selectedSortDir === "") {
      setSortBy("");
    } else {
      setSortBy("price");
    }
  };

  return (
    <div className={styles.container}>
      <select value={sortDir} onChange={handleSelectChange}>
        <option value="">Всі</option>
        <option value="ASC">За зростанням</option>
        <option value="DESC">За спаданням</option>
      </select>
    </div>
  );
}
