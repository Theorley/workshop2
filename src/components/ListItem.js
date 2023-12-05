import Item from "./Item";
function ListItem(props) {

    return (
        <div>
            {props.data.map((item)=><Item description={item.description} name={item.name} price={item.price}></Item>)}
        </div>
    )
  }
  
  export default ListItem;