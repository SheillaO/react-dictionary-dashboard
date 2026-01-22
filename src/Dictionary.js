import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          value={keyword}
          autoFocus={true}
        />
      </form>
    </div>
  );
}
