import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // const [restaurantList, setRestaurantList] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const restaurants = useFetchRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const isOnline = useOnlineStatus();
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  const { user, setUserName } = useContext(UserContext);
  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  if (!isOnline)
    return (
      <h1>Looks like you're offline. Please check your internet connection</h1>
    );

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="dark:bg-slate-600">
      <div className="filter">
        <input
          data-testid="searchInput"
          type="text"
          className="m-4 p-2 rounded-md w-72 shadow-xl shadow-slate-300"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" m-4 px-8 py-2 rounded-md shadow-lg hover:shadow-xl bg-slate-100 dark:bg-slate-900 dark:text-white font-semibold  shadow-slate-300"
          onClick={() => {
            setFilteredRestaurants(
              restaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
        <button
          className=" m-4 px-8 py-2 rounded-md shadow-lg hover:shadow-xl bg-slate-100 dark:bg-slate-900 font-semibold shadow-slate-300 dark:text-white"
          onClick={() => {
            setFilteredRestaurants(
              restaurants.filter(
                (restaurant) => restaurant?.info?.avgRating > 4
              )
            );
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          data-testid="userName"
          type="text"
          className="m-4 p-2 rounded-md w-72 shadow-xl shadow-slate-300"
          value={user}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-evenly relative">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4 ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
