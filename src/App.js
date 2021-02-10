import logo from "./logo.svg";
import "./App.css";
import Header from "./componenets/Header/Header";
import TeamSelector from "./componenets/TeamSelector/TeamSelector";
import MainChart from "./componenets/MainChart/MainChart";
import AuxChart from "./componenets/AuxChart/AuxChart";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <TeamSelector />
        <MainChart />
      </div>
      <div>
      <AuxChart />
      <AuxChart />
      </div>

    </div>
  );
}

export default App;
