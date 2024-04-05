import { useState, useEffect } from "react";
//import resList from "../utils/resData";
import ResCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [copyOfListOfRestaurants, setCopyOfListOfRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9890648&lng=82.2474648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setCopyOfListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div>
        <h3>Looks like you are offline</h3>
        <h3>Please check your internet connection</h3>
      </div>
    );
  }
  if (listOfRestaurants === null) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          style={{
            border: "solid 3px orange",
            borderRadius: "10px",
            padding: "5px",
            backgroundColor: "rgb(249, 235, 209)",
            marginTop: "10px",
          }}
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          className="search-btn"
          style={{
            backgroundColor: "orange",
            borderRadius: "20%",
            padding: "7px",
            border: "none",
            margin: "1px",
          }}
          onClick={() => {
            const searchData = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setCopyOfListOfRestaurants(searchData);
          }}
        >
          search
        </button>
      </div>
      <div className="filter-btn-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setCopyOfListOfRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="card-container">
        {copyOfListOfRestaurants.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            <ResCard key={res.info.id} resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
