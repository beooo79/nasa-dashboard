import "./App.css";
import { Apod } from "./components/Apod";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Dashboard</h1>
        <table>
          <tr>
            <td>lorem ipsum</td>
            <td>
              <Apod />
            </td>
          </tr>
        </table>
      </header>
      <aside>
        <div class="container">
          <div class="vertical-center">
            by beoo79&nbsp;&nbsp;&nbsp;
            <img
              class="vertical"
              width="5%"
              src="https://avatars.githubusercontent.com/u/53890208?v=4"
              alt="beoo79"
            />
            &nbsp;&nbsp;&nbsp; Thanks to the
            <a className="App-link" href="api.nasa.gov">
              NASA open API site
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
