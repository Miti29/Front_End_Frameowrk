import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1); //sets to page 1 after search is complete
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault(); //to prevent default refreshing of page and set back to page 1
        }}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
