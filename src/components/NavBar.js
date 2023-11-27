import Btn from "./Btn";
import "./NavBar.css";
function NavBar(props) {
  return (
    <div className="title">
      {props.title}
      <Btn onClick={props.onShowCart} />
    </div>
  );
}
export default NavBar;
