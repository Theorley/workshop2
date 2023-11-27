import "./Btn.css";
import { FaShoppingCart } from "react-icons/fa";
function Btn(props) {
  return (
    <button className="cart-button" onClick={props.onClick}>
      <FaShoppingCart />
      Your Cart
      <label className="quantity">0</label>
    </button>
  );
}
export default Btn;
