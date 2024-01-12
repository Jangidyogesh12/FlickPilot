import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Particle from "./components/particles/Particle";
import Recommend from "./components/recommendation/Recommend";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Particle />
      <Navbar />
      <div className="info">
        <Home />
        <Recommend />
      </div>
      <Footer />
    </div>
  );
}

export default App;
