import { React, useEffect, useState } from "react";

export const Apod = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApod = async () => {
      const response = await fetch("http://localhost:8080/apod");
      console.log(response);
      const data = await response.json();
      setData(data);
    };
    fetchApod();
  }, []);

  return (
    <div className="Apod">
      <header className="App-header">
        <h3>Random Astronomy Picture of the Day</h3>
        <div>
          <p className="App-text">{data.date}</p>
          <p className="App-text">{data.title}</p>
        </div>
        <a href={data.hdurl}>
          <img src={data.url} alt="APoD" height="300px" width="auto" />
        </a>
        <p className="App-text">{data.explanation}</p>
      </header>
    </div>
  );
};
