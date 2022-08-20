import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/Footer";
import Catalog from "./component/Catalog";
import Slider from "./component/Slider";
import Register from "./component/Register";
import Product from "./component/Product";
import Image from "./component/Image";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Image />
      <Product />
      <Register />
      <Slider />
      <Catalog />
      <Footer />
    </>
  );
}

export default App;
