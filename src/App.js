import Navbar from "./components/navbar/Navbar";
import './App.css'
import Intro from "./components/intro/Intro";
import MyServices from "./components/service/MyServices"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <MyServices />
    </div>
  );
}

export default App;
