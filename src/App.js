import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./Components/mainComponent";
import FrontDebitCardComponent from "./Components/frontDebitCardComponent";
import BackDebitCardComponent from "./Components/backDebitCardComponent";

function App() {
  return (
    <div className="App">
      <MainComponent />
      <FrontDebitCardComponent />
      <BackDebitCardComponent />
    </div>
  );
}

export default App;
