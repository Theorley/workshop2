import "./Btn.css";
function Btn(props) {
  return (
    <button className="cart-button" onClick={props.onClick}>
      Your Cart
      <label className="quantity">0</label>
    </button>
  );
}
export default Btn;
