import Navbar from "./components/navbar/Navbar";
import './App.css'
import Intro from "./components/intro/Intro";
import MyServices from "./components/service/MyServices"
import Experience from "./components/experience/Experience";
import Work from "./components/Work/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Portfolio />
      <Experience />
      <Work />
      <MyServices />
      <Testimonial />
      
      
      
    </div>
  );
}

export default App;
