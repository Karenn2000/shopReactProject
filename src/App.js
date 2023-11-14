import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";
import Card from "./component/Card";


function App() {
  return (
    <>
    <Navbar />
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>}  />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/cart" element={<Card/>} />
     </Routes>
    </>
  );
}

export default App;
