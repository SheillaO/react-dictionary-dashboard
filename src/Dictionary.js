import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setresults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryresponse(response) {
    console.log(response.data);
    setresults(response.data);
  }

  function search() {
    //shecodes dictionary api
    let apikey = "7601b0fff0179o9d5059a8db34ctbc66";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apikey}`;
    axios.get(apiUrl).then(handleDictionaryresponse);
  }

  let pexelsApiKey = "cNmNSmAGYVSHrL3gDxKOHw5d7KVfoMLn2dPuDqL66nbqbwW2ftj5oTxH";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
  let headers = {Authorization: `Bearer ${pexelsApiKey}`};

  axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsresponse);

  function handlePexelsresponse(response) {
    setPhotos(response.data.photos)
  }


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              value={keyword}
              autoFocus={true}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: revolution, financial markets, timezones..
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
