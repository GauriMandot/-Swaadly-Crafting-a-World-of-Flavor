import { cdn } from "../constants";

const RestaurantCard = (props) => {
  const {
    cuisines,
    name: restaurantName,
    avgRating: rating,
    costForTwo: price,
    sla,
    cloudinaryImageId,
  } = props.restaurantDetails.info;



  
  return (
    <div id="restaurant-card">
      <div id="restro-img-box">
        <img src={cdn + cloudinaryImageId} alt="" />
      </div>
      
      <h2>{restaurantName}</h2>
      <h3 className="restro-subdetails">{cuisines.join(" | ")}</h3>
      <h4 className="restro-subdetails" id='restro-highlight'>⭐ {rating} ● {sla.slaString}</h4>
      <h4 className="restro-subdetails">{price} </h4>
    </div>
  );
};

export default RestaurantCard;
