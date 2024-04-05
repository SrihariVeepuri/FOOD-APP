import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = props?.resData?.info;
  return (
    <div className="res-card">
      <div className="card-container">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>
      <div className="card-data">
        <h3>{name}</h3>
        <p>{cuisines.join(",")}</p>
        <p>{avgRating} stars</p>
        <p>{deliveryTime} minutes</p>
      </div>
    </div>
  );
};

export default ResCard;
