//SVG
import addButton from "../assets/add.svg";

//Styles
import styles from "./Search.module.css";

function Search({
  showAddContact,
  search,
  searchHandler,
}) {
  return (
    <div className={styles.container}>
      <p>جستجو در مخاطبین:</p>
      <input type="text" onChange={searchHandler} value={search} />
      <img
        src={addButton}
        alt="Select Button"
        className={styles.add}
        onClick={showAddContact}
      />
    </div>
  );
}

export default Search;
