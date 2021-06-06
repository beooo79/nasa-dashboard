import { React, useEffect, useState } from "react";

export const Search = () => {
  const [apollo, setApollo] = useState([]);
  const [moon, setMoon] = useState([]);
  const [mars, setMars] = useState([]);

  useEffect(() => {
    const fetchSearch = async (query, method) => {
      const response = await fetch(
        "http://localhost:8080/search?query=" + query
      );
      const d = await response.json();
      method(d.collection.metadata.total_hits);
    };
    fetchSearch("Apollo", setApollo);
    fetchSearch("Moon", setMoon);
    fetchSearch("Mars", setMars);
  }, []);

  return (
    <div className="App-header">
      <header className="App-header">
        <h3>Search Images Stats</h3>
        <p>Apollo:&nbsp;{apollo}</p>
        <p>Moon:&nbsp;{moon}</p>
        <p>Mars:&nbsp;{mars}</p>
      </header>
    </div>
  );
};
