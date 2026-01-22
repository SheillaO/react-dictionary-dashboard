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

    

    setWordData({
      word: data.word,
      phonetic: data.phonetic,
      partOfSpeech: firstMeaning.partOfSpeech,
      definition: firstMeaning.definition, 
      example: firstMeaning.example || null, 
      synonyms: firstMeaning.synonyms || [], 
    });
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
      {wordData && (
        <div className="results">
          <h2>{wordData.word}</h2>
          <p>
            <strong>Phonetic:</strong> {wordData.phonetic}
          </p>
          <p>
            <strong>Part of speech:</strong> {wordData.partOfSpeech}
          </p>
          <p>
            <strong>Definition:</strong> {wordData.definition}
          </p>
          {wordData.example && (
            <p>
              <em>Example: {wordData.example}</em>
            </p>
          )}
          {wordData.synonyms.length > 0 && (
            <p>
              <strong>Synonyms:</strong> {wordData.synonyms.join(", ")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
