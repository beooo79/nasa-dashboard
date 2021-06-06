import { React, useEffect, useState } from "react";

export const Apod = () => {
  const [data, setData] = useState([]);
  const [resourceApod, setResourceApod] = useState(new Date());

  useEffect(() => {
    fetch("http://localhost:8080/apod")
      .then((response) => response.json())
      .then((json) => {
        if (json.media_type === "image") {
          setData(json);
        }
      });
  }, [resourceApod]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Random Astronomy Picture of the Day</h3>
        <button onClick={() => setResourceApod(new Date())}>Reload</button>
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
