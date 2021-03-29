import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <ContactMe />
    </>
  );
}

export default App;
