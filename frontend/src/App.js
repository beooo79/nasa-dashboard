import "./App.css";
import "react-sortable-tree/style.css";
import { React } from "react";
import { Apod } from "./components/Apod";
import { Search } from "./components/Search";
import { GraphView } from "./components/GraphView";

function App() {
  return (
    <div className="App">
      <header className="App">
        <h1>NASA Dashboard</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <Search />
              </td>
              <td>
                <Apod />
              </td>
              <td>
                <GraphView />
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
