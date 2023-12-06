import logo from './logo.svg';
import './App.css';
import Cart from "./components/Cart";
import { useContext, useState } from "react";
import dataContext from "./data-context";
import ListItem from "./components/ListItem";
import Card from "./components/Card";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const data = useContext(dataContext);
  const dataArray = data.data;
  console.log(dataArray);
  return (
    <dataContext.Provider data={dataArray}>
      <div className="App">
        <NavBar onShowCart={() => setCartIsShown(true)} title={"ReactMeals"} />
        {cartIsShown && <Cart />}
        <Card></Card>
        <ListItem data={dataArray}></ListItem>
      </div>
    </dataContext.Provider>
  );
}
export default App;
