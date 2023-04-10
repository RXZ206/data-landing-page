import "./components/App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Analytics from "./components/Analytics.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter></Newsletter>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
