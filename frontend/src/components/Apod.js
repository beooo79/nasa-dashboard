import { React, useEffect, useState } from "react";

export const Apod = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApod = async () => {
      const response = await fetch("http://localhost:8080/apod");
      const data = await response.json();
      if (data.media_type === "image") {
        setData(data);
      }
    };
    fetchApod();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Random Astronomy Picture of the Day</h3>
        <p className="App-text" float="left">
          {data.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.title}
        </p>
        <a href={data.hdurl}>
          <img src={data.url} alt="APoD" height="auto" />
        </a>
        <p className="App-textmini">{data.explanation}</p>
      </header>
    </div>
  );
};
