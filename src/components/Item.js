import dataContext from "../data-context";
import "./Item.css";
import React,{useContext, useRef} from 'react';
function Item(props) {
 const ctx=useContext(dataContext);
 const dataArray=ctx.data;
  const clickHandler=()=>
  {
 
    const amount =ref.current.value;
   
    for (let index = 0; index < dataArray.length; index++) {
      const element = dataArray[index];
      if (element.name===props.name) {
        element.amount=props.amount+ref;
      }     
    }
    <dataContext.Provider data={dataArray}>
    
    </dataContext.Provider>


  }
  const ref = useRef(null);

  return <div className="item-container">
  <div>
    <div className="item-name">{props.name}</div>
    <div className="item-description">{props.description}</div>
    <div className="item-price">{props.price+"$"}</div>
  </div>
  <div className="amount-container">
    <span>Amount: <input className="amount" defaultValue="1" ref={ref}></input></span>
    <button className="increment-button" onClick={clickHandler}>Add+</button>
  </div>
</div>
}

export default Item;
