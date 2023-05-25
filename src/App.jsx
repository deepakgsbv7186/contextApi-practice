import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import { CartProvider } from "./helper/CartContext";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
