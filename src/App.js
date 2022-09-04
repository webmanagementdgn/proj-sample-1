import PersonalCart from "./pages/personalCart";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./pages/details";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculate } from "./features/cart/cartSlice";
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<PersonalCart />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
