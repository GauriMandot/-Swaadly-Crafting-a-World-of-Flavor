import "./Cart.css";
import { useSelector } from "react-redux";
import CartFoodDetails from "./CartFoodDetails";
import "./FoodDetails.css";
import { useDispatch } from "react-redux";
import { clearAllItems } from "../utility/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  let dispatch = useDispatch();

  const [messageDisplay, setMessageDisplay] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  function clearBtnHandler() {
    setMessageDisplay(true);
  }

  function deleteButtonHandler() {
    setMessageDisplay(false);
    dispatch(clearAllItems());
  }

  function cancelButtonHandler() {
    setMessageDisplay(false);
  }

  useEffect(() => {
    setTotalPrice(
      items.reduce((total, obj) => {
        let cost = obj.price === undefined ? 0 : obj.price;

        return total + cost / 100;
      }, 0)
    );

  }, [items]);

  if (items.length === 0) {
    return <p id="empty-cart">Oops! Your cart is empty.</p>;
  }

  return (
    <div id="main-cart-div">
      <div id="cart-list-items-div">
        <button
          className="add-remove-btn"
          id="clear-btn"
          onClick={clearBtnHandler}
        >
          Clear all
        </button>
        <div id="cart">
          {items.map((obj) => {
            return <CartFoodDetails key={obj.id} foodItemInfo={obj} />;
          })}
        </div>
        {messageDisplay && (
          <div id="confirmation-div">
            <h2 id="confirm-heading">Are you sure ?</h2>
            <p>
              Are you sure you want to delete all items in your list? This
              action cannot be undone.
            </p>
            <div id="confirm-using-button">
              <button
                className="confirm-btn"
                id="delete-btn"
                onClick={deleteButtonHandler}
              >
                Delete
              </button>
              <button className="confirm-btn" onClick={cancelButtonHandler}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div id="proceed-to-pay-div">
        <p className="pay-text"><b>Total : </b> ₹ {totalPrice}</p>
        <p className="pay-text"><b>Items :</b> {items.length}</p>
        <button id="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
