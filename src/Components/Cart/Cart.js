import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Card = (props) => {
  const cartitems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Totaal AMOUNT</span>
        <span>35.56</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button></div>
    </Modal>
  );
};
export default Card;
