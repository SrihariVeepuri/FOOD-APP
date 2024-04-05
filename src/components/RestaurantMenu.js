import { useParams } from "react-router-dom";
import { ITEM_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/userestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  if (menuData === null) {
    return <h3>Loading....</h3>;
  }
  return (
    <div>
      <div>
        {menuData.map((item) => (
          <div className="item-container">
            <div>
              <ul>
                <li key={item.card.info.id}>
                  {item.card.info.name} - Rs{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </li>
              </ul>
            </div>
            <div>
              <img
                className="item-image"
                src={ITEM_URL + item.card.info.imageId}
                alt="item-logo"
              />
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};
export default RestaurantMenu;
