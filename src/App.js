import Navbar from "./components/Navbar";
import "./App.css";
import TechList from "./components/TechList";
import { useEffect } from "react";
import { calculateTotal } from "./control/cartSlice";
import { useSelector , useDispatch } from "react-redux";

function App() {

  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(calculateTotal());
  }, [cartItems])

  return (

    <div>
      <Navbar />
      <TechList />
    </div>
  
  )
}

export default App
