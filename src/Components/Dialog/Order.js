const Order = (props) => {
  return (
    <div className="order">
      <div className="order__content">
        <p className="order__message">{props.message}</p>
        <button className="order__button" onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}