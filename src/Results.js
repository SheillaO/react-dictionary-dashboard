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
      <section>
        <div className="word-header">
          <div>
            <h2>{results.word}</h2>
            <span className="meanings-badge">
              {results.meanings.length}{" "}
              {results.meanings.length === 1 ? "meaning" : "meanings"}
            </span>
          </div>
          <SaveWord word={results.word} />
        </div>

        <Phonetic phonetic={results.phonetic} />
      </section>
      {results.meanings.map((meaning, index) => (
        <section key={index}>
          <Meaning meaning={meaning} />
        </section>
      ))}
    </div>
  );
}
