import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import SaveWord from "./SaveWord";
import "./Results.css";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  const results = props.results;

  return (
    <div className="results">
      <section className="word-section">
        <h2>{results.word}</h2>
        <Phonetic phonetic={results.phonetic} />
        <div className="word-meta">
          <span className="meanings-count">
            {results.meanings.length}{" "}
            {results.meanings.length === 1 ? "meaning" : "meanings"}
          </span>
          <SaveWord word={results.word} />
        </div>
      </section>

      {results.meanings.map((meaning, index) => (
        <section key={index} className="meaning-section">
          <Meaning meaning={meaning} />
        </section>
      ))}
    </div>
  );
}
