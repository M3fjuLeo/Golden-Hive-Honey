import Navbar from "./Components/Navbar/Navbar";
import About from "./sections/About/About";
import Beauty from "./sections/Beauty/Beauty";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import MeetUs from "./sections/Meet Us/MeetUs";
import Products from "./sections/Products/Products";
import Shop from "./sections/Shop/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Shop />
      <Beauty />
      <MeetUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
