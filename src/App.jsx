// import logo from './logo.svg';
import './App.css';
import{Groceries} from "./components/Groceries"

function App() {
  return (
    <div className="App">
      <marquee><h1>Enter the Groceries Names</h1></marquee>
      <Groceries />
    </div>
  );
}

export default App;
