import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  // If there are NO results yet, don't show anything
  if (!props.results) {
    return null;
  }

  // Now we know results exist, so we can use them
  const results = props.results;

  return (
    <div className="results">
      <section>
        <h2>{results.word}</h2>

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
