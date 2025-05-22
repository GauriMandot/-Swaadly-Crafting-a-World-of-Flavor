import { useEffect, useState } from "react";
import { MenuUrl } from "../constants";

const useFetchRestaurantMenu = (resId) => {
  const [restDetails, setRestDetails] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const data = await fetch(MenuUrl + resId);

        if (!data.ok) {
          throw new Error("Failed to fetch Restaurant Menu");
        }

        const json = await data.json();

        setRestDetails(json?.data === undefined ? [] : json?.data);
      } catch (e) {
        console.log(e);
        setRestDetails([]);
      }
    }

    fetchMenu();
  }, [resId]);

  return restDetails;
};

export default useFetchRestaurantMenu;
