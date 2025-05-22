import { useState, useEffect } from "react";
import { RestUrl } from "../constants";

const useFetchRestaurants = () => {
  const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);

  async function fetchData() {
    try {
      let response = await fetch(RestUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch Restaurants");
      }

      let json = await response.json();

      let data =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestList(data === undefined ? [] : data);
      setFilteredRestList(data === undefined ? [] : data);
    } catch (error) {
      console.log(error);
      setRestList([]);
      setFilteredRestList([]);
    }
  }

  useEffect(() => {
    // console.log("useEffect called");

    fetchData();
  }, []);

  return { restList, filteredRestList, setFilteredRestList };
};

export default useFetchRestaurants;
