import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    //optional chaining
    const res =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(res);
  };

  return restaurants;
};

export default useFetchRestaurants;
