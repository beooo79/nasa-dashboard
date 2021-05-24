import "./App.css";
import { Apod } from "./components/Apod";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Dashboard</h1>
        <p>by beoo79</p>
        <p>
          Thanks to the{" "}
          <a className="App-link" href="api.nasa.gov">
            NASA open API site
          </a>
        </p>
        <Apod />
      </header>
    </div>
  );
}

export default App;
