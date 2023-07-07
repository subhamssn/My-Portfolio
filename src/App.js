import Navbar from "./components/navbar/Navbar";
import './App.css'
import Intro from "./components/intro/Intro";
import MyServices from "./components/service/MyServices"
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <MyServices />
      <Experience />
    </div>
  );
}

export default App;
