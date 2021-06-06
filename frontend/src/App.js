import "./App.css";
import { Apod } from "./components/Apod";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="App">
        <h1>NASA Dashboard</h1>
        <table>
          <tr>
            <td>
              <Search />
            </td>
            <td>
              <Apod />
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
