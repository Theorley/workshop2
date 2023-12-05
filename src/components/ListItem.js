import Item from "./Item";
import"./ListItem.css";
function ListItem(props) {

    return (

        <div className="list">
            {props.data.map((item)=><Item description={item.description} name={item.name} price={item.price}></Item>)}
        </div>
    )
  }
  
  export default ListItem;