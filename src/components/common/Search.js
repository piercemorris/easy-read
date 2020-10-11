import React, { useState } from 'react';
import axios from "axios"

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const onSearch = async () => {
    console.log("searching...");
    try {
      const { data } = await axios.get(`https://jisho.org/api/v1/search/words?keyword=${searchTerm}`);
      console.log(data.data);
      setSearchResult(data.data);
    } catch(ex) {
      console.log(ex);
      throw ex;
    }
  }

  return (  
    <div>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.currentTarget.value)} />
      <button onClick={() => onSearch()}>Search</button>
      {searchResult.length > 0 && searchResult.map(term => (
        <div key={term.slug}>
          <h3>{term.slug}</h3>
          {term.is_common ? "common" : ""}
        </div>
      ))}
    </div>
  );
}
 
export default Search;