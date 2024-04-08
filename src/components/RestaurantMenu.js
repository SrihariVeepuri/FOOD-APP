import { useParams } from "react-router-dom";
import { ITEM_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/userestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  if (menuData === null) {
    return <h3>Loading....</h3>;
  }
  const { name, cuisines } = menuData?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card;
  const catagories =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p>{cuisines.join(", ")}</p>

      {catagories.map((catagory) => (
        <RestaurantCatagory
          key={catagory?.card?.card?.title}
          data={catagory?.card?.card}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
