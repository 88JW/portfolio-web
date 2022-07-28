import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Projects from "./components/projects";
import ContactUs from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
