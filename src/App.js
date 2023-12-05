import NavBar from "./components/NavBar";
import "./App.css";
import Cart from "./components/Cart";
import { useContext, useState } from "react";
import dataContext from "./data-context";
import ListItem from "./components/ListItem";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const data=useContext(dataContext);
  const dataArray=data.data;

  return (
    <div className="App">
      <NavBar onShowCart={() => setCartIsShown(true)} title={"ReactMeals"} />
      {cartIsShown && <Cart />}
      <ListItem data={dataArray}></ListItem>
    </div>
  );
}
export default App;
