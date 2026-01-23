import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">{props.meaning.definition}</div>
      {props.meaning.example ? (
        <div className="example">
          <em>Example: {props.meaning.example}</em>
        </div>
      ) : null}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
