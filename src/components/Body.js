import { useState, useEffect, useContext } from "react";
//import resList from "../utils/resData";
import ResCard, { WithOpenedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [copyOfListOfRestaurants, setCopyOfListOfRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");
  const RestaurantOpened = WithOpenedLabel(ResCard);

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
  const { loggedInUser, setUserName } = useContext(UserContext);
  if (listOfRestaurants === null) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex m-6">
        <div className="mx-6">
          <input
            className=" p-1 border-solid border-2 border-pink-500 rounded-lg"
            type="text"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="mx-1 p-1 bg-pink-500 text-white rounded-lg border-solid border-2 border-pink-300"
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
        <div className="mx-auto p-1 bg-pink-500 text-white rounded-lg border-solid border-2 border-pink-300">
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
        <div>
          <label>UserName: </label>
          <input
            className="border border-black px-2"
            type="text"
            value={loggedInUser}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {copyOfListOfRestaurants.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            {res?.info?.availability?.opened ? (
              <RestaurantOpened resData={res} />
            ) : (
              <ResCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
