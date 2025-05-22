import { urlFoodImage } from "./../constants.js";
import "./FoodDetails.css";
import { useDispatch } from "react-redux";
import { addItem } from "./../utility/cartSlice.js";
import { useState } from "react";

const FoodDetails = (props) => {
  let { itemAttribute, name, price, imageId, description, ratings, id } =
    props?.foodInfo?.card?.info;

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

  let dispatch = useDispatch();

  const [showNotification, setShowNotification] = useState(false);

  function addHandler() {
    dispatch(
      addItem({ itemAttribute, name, price, imageId, description, ratings, id })
    );

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
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
        <button className="add-remove-btn" onClick={addHandler}>
          ADD
        </button>
      </div>

      {showNotification && (
        <div className="notification-div">Item added to the cart</div>
      )}
    </div>
  );
};

export const WithCustomisableLabel = (FoodDetails) => {
  return (props) => {
    return (
      <div id="wrapper">
        <FoodDetails {...props} />
        <p id="customisable-tag">Customisable</p>
      </div>
    );
  };
};

export default FoodDetails;
