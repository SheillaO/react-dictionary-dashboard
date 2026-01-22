import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  // If there are NO results yet, don't show anything
  if (!props.results) {
    return null;
  }

  // Now we know results exist, so we can use them
  const results = props.results;

  return (
    <div className="results">
      <h2>{results.word}</h2>
      <p>{results.phonetic}</p>

      {results.meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </div>
  );
}
