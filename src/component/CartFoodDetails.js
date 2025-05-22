import { urlFoodImage } from "./../constants.js";
import "./FoodDetails.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "../utility/cartSlice.js";
import { useState } from "react";

const CartFoodDetails = (props) => {
  let { itemAttribute, name, price, imageId, description, ratings, id } =
    props?.foodItemInfo;

  let dispatch = useDispatch();

  const [messageDisplay, setMessageDisplay] = useState(false);

  if (!price) {
    price = props?.foodInfo?.card?.info?.defaultPrice;
  }

  let foodLabel = null;
  let foodClass = "";

  if (itemAttribute?.vegClassifier === "VEG") {
    foodLabel = "🟢";
    foodClass = "green-border";
  } else {
    foodLabel = "🔴";
    foodClass = "red-border";
  }

  function removeHandler() {
    setMessageDisplay(true);
  }

  function deleteButtonHandler() {
    setMessageDisplay(false);
    dispatch(deleteItem(id));
  }

  function cancelButtonHandler() {
    setMessageDisplay(false);
  }

  return (
    <div className="FoodDetails">
      <div id="food-box">
        <div id="food-label" className={foodClass}>
          {foodLabel}
        </div>
        <p>{name}</p>
        <p>₹ {price / 100}</p>
        {Object.keys(ratings.aggregatedRating).length !== 0 && (
          <div className="food-ratings">
            <p className="green-bold-text">
              🟊 {ratings.aggregatedRating.rating}
            </p>
            <p className="grey-text">
              ({ratings.aggregatedRating.ratingCountV2})
            </p>
          </div>
        )}
        <p id="description-box">{description}</p>
      </div>

      <div className="button-with-img-div">
        {imageId && <img src={urlFoodImage + imageId} alt="" id="food-img" />}
        <button className="add-remove-btn" onClick={removeHandler}>
          Remove
        </button>
      </div>

      {messageDisplay && (
        <div id="confirmation-div">
          <h2 id="confirm-heading">Are you sure ?</h2>
          <p>
            Are you sure you want to delete this item? This action cannot be
            undone.
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
  );
};

export default CartFoodDetails;
