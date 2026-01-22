import React from "react";

export default function Results(props) {
  const results = props.results;

  if (props.results) {
    return null; 
  }

  return (
    <div>
      <h2>{results.word}</h2>
      <p>
        <strong>Phonetic:</strong> {results.phonetic}
      </p>

      {results.meanings.map((meaning, index) => (
        <div key={index} className="meaning">
          <p>
            <strong>Part of speech:</strong> {meaning.partOfSpeech}
          </p>
          <p>
            <strong>Definition:</strong> {meaning.definition}
          </p>
          {meaning.example && (
            <p>
              <em>Example: {meaning.example}</em>
            </p>
          )}
          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <p>
              <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
