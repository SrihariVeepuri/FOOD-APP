import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setMenuData(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  return menuData;
};
export default useRestaurantMenu;
