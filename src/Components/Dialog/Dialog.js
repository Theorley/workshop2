
const Dialog = (props) => {
    [quantity,setQuantity]=useState(props.items.amount);

    const addElement = () => {
        setQuantity(quantity+1);
    }
    const removeElement = () => {
        setQuantity(quantity-1);
    }

  return (
    <div className="dialog">
      <div className="dialog__content">
        <ul className="dialog__list">
          {props.items.map((item) => {
            return <li className="dialog__item" key={item.key}>
              <div className="dialog__item__name">{item.name}</div>
              <div className="dialog__item__price">{item.price}</div>
              <div className="dialog__item__quantity">{item.amount}</div>
              <button className="dialog__item__button__remove" onClick={removeElement}>-</button>
              <button className="dialog__item__button__add" onClick={addElement}>+</button>
            </li>
          })}
        </ul>
        <p className="dialog__message">Total amount</p>
        <button className="dialog__button" onClick={props.onClose}>Close</button>
        <button className="dialog__button" onClick={props.onClose}>Order</button>
      </div>
    </div>
  );
        }
export default Dialog;