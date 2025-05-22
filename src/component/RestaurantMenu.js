import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utility/useFetchRestaurantMenu";
import ShimmerMenu from "./ShimmerMenu";
import MenuCategory from "../MenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restDetails = useFetchRestaurantMenu(resId);

  const [showIndex,setShowIndex]=useState(null);

  function updateSetShowIndex(index){

    if(showIndex===index){
      setShowIndex(null);
    }

    else{
      setShowIndex(index);
    }
   
  }

  if (restDetails.length === 0) {
    return <ShimmerMenu />;
  } else {
    let {
      name,
      areaName,
      costForTwoMessage,
      avgRatingString,
      totalRatingsString,
    } = restDetails?.cards[2]?.card?.card?.info;

    let categories =
      restDetails?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (val) => {
          const type = val?.card?.card?.["@type"];
          return (
            type ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            type ===
              "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
          );
        }
      );

    return (
      <div id="RestaurantMenu">
        <div id="center-div">
          <div id="rest-info-box" className="detail-box">
            <h1>{name}</h1>
            <p>
              ⭐{avgRatingString} ({totalRatingsString})
            </p>
            <p>{costForTwoMessage}</p>
            <p>
              <b>Outlet :</b> <span id="area-name">{areaName}</span>
            </p>
          </div>

          <div id="menu-heading-box">
            <h2>MENU</h2>
            <p>────୨ৎ────</p>
          </div>

          <div id="menu-box" className="detail-box">
            {categories.map((catergory,index) => {
              return (
                <MenuCategory
                  key={catergory?.card?.card?.categoryId}
                  val={catergory?.card?.card}
                  accordianBodyVisible={index===showIndex ? true : false}
                  updateSetShowIndex={()=>updateSetShowIndex(index)}
                 
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
