import { useEffect, useState } from "react";
import styles from "./ItemsContainer.module.css";
import Item from "../Item";
import Loading from "../UI/Loading";
import { useLocation } from "react-router-dom";
import { fetchItems, fetchTypes } from "../../http/itemApi";
import { useSelector, useDispatch } from "react-redux";
import { selectTypeId } from "../../features/types/typeSlice";
import { setTypes } from "../../features/types/typeSlice";
import Sort from "../UI/Sort";

export default function ItemsContainer() {

  const [sortBy, setSortBy] = useState('')
  const [sortDir, setSortDir] = useState('') 

  const [fetching, setFetching] = useState(false);

  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const type = pathname.slice(1);
  const typeId = useSelector((state) => selectTypeId(state, type));

  if (typeId === null) {
    fetchTypes().then((data) => dispatch(setTypes(data)));
  }

  useEffect(() => {
    setFetching(true);
    fetchItems(typeId, currentPage, itemsPerPage, sortBy, sortDir).then((data) => {
      setItems(data.rows);
      setTotalItems(data.count);
      setFetching(false);
    });
  }, [typeId, currentPage, sortBy, sortDir]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (sortBy, sortDir) => {
    setSortBy(sortBy);
    setSortDir(sortDir);
  }

  return (
    <div className={styles.wrapper}>
      <Sort onSortChange={handleSortChange}/>
      <div className={styles.itemsContainer}>
        {fetching ? (
          <Loading />
        ) : items.length ? (
          items.map((item) => <Item item={item} type={type} key={item.id} />)
        ) : (
          <span style={{ fontSize: "2rem", color: "black" }}>
            Товари відсутні
          </span>
        )}
      </div>
      <div className={styles.pages}>
        {pages.map((page) => (
          <span
            className={currentPage === page ? styles.currentPage : styles.page}
            key={page}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
}
