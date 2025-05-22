import RestaurantCard from "./RestaurantCard.js";
// import restaurantData from "./../utility/restaurantData.js";//Mock data
import { useContext, useState } from "react";
import ShimmerUI from "./ShimmerUI.js";
import { Link } from "react-router-dom";
import useFetchRestaurants from "../utility/useFetchRestaurants.js";
import userContext from "../utility/userContext.js";

const Body = () => {
  // let restList=restaurantData;

  const [searchText, setSearchText] = useState("");

  const { restList, filteredRestList, setFilteredRestList } =
    useFetchRestaurants();

  const {userName,setUserName} = useContext(userContext);

  // console.log("Component rendered");

  function topRestaurantClickHandler() {
    setFilteredRestList(
      restList.filter((val) => {
        return val.info.avgRating >= 4;
      })
    );
  }

  function searchHandler() {
    // console.log(searchText);

    let searchTextInLower = searchText.toLowerCase();

    function inCuisine(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes(searchTextInLower)) {
          return true;
        }
      }

      return false;
    }

    //logic

    //search will work basis on cuisines or restaurant name

    setFilteredRestList(
      restList.filter((restVal) => {
        return (
          restVal.info.name.toLowerCase().includes(searchTextInLower) ||
          inCuisine(restVal.info.cuisines)
        );
      })
    );
  }

  //we can also use ternary operator

  //Conditional rendering
  if (restList.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div id="body">
      <div id="name-box">
        <label htmlFor="personalized-nameUpdate" id="name-label">
          We would love to call you :{" "}
        </label>
        <input
          type="text"
          placeholder={userName}
          id="personalized-nameUpdate"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
      </div>

      <h1 id="user-greetings">
        Hi{userName !== "User" && ", " + userName}! What's your mood today?
      </h1>
      <div id="container">
        <div id="search">
          <input
            type="text"
            placeholder="Hakka Noodles"
            id="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="btn" onClick={searchHandler}>
            Search
          </button>
        </div>

        <button className="btn" onClick={topRestaurantClickHandler}>
          Top Rated Restaurants
        </button>
      </div>

      {filteredRestList.length === 0 ? (
        <div id="result-box">
          <p id="result-content">No results found</p>
        </div>
      ) : (
        <div id="restaurant">
          {filteredRestList.map((restaurantObj) => {
            return (
              <Link
                className="restro-link"
                key={restaurantObj.info?.id}
                to={"/restaurants/" + restaurantObj.info?.id}
              >
                <RestaurantCard restaurantDetails={restaurantObj} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
