import Navbar from "./components/navbar/Navbar";
import './App.css'
import Intro from "./components/intro/Intro";
import MyServices from "./components/service/MyServices"
import Experience from "./components/experience/Experience";
import Work from "./components/Work/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";

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
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
