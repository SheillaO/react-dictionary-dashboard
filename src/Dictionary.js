import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setresults] = useState(null);

  function handleresponse(response) {
    console.log(response.data);
    setresults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apikey = "7601b0fff0179o9d5059a8db34ctbc66";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apikey}`;
    axios.get(apiUrl).then(handleresponse);
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
          placeholder="What word do you want to look up?"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
