import React, { useState, useEffect } from "react";
import "./SaveWord.css";

export default function SaveWord(props) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedWords = JSON.parse(sessionStorage.getItem("savedWords") || "[]");
    setIsSaved(savedWords.includes(props.word));
  }, [props.word]);

  function handleSave() {
    const savedWords = JSON.parse(sessionStorage.getItem("savedWords") || "[]");

    if (isSaved) {
      const updated = savedWords.filter((w) => w !== props.word);
      sessionStorage.setItem("savedWords", JSON.stringify(updated));
      setIsSaved(false);
    } else {
      savedWords.push(props.word);
      sessionStorage.setItem("savedWords", JSON.stringify(savedWords));
      setIsSaved(true);
    }
  }

  function handleShare() {
    navigator.clipboard.writeText(
      `Check out "${props.word}" on Catalyst Dictionary!`,
    );
    alert("Link copied! 📋");
  }

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        className={`SaveWord ${isSaved ? "saved" : ""}`}
        onClick={handleSave}
      >
        {isSaved ? "✓ Saved" : "Save Word"}
      </button>

      <button className="ShareWord" onClick={handleShare}>
        Share 🔗
      </button>
    </div>
  );
}
