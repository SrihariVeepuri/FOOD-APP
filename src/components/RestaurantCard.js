import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const ResCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = props?.resData?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 flex-column  w-[200px] rounded-xl overflow-hidden">
      <img
        className="rounded-xl w-full h-auto"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />

      <div className="p-2">
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>User:{loggedInUser}</h4>
      </div>
    </div>
  );
};

export const WithOpenedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="px-2 bg-green-500 rounded-lg text-white text-center">
          open
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};
export default ResCard;
