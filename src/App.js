import logo from './logo.svg';
import './App.css';
import Cart from "./components/Cart";
import { useState } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <div className="App">
      <NavBar onShowCart={() => setCartIsShown(true)} title={"ReactMeals"} />
      {cartIsShown && <Cart />}
    </div>
  );
}
export default App;
