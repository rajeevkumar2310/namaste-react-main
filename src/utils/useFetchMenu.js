import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL } from "./constants";

const useFetchMenu = (resID) => {
  const [menu, setMenu] = useState(null);
  const [mainInfo, setMainInfo] = useState(null);

  useEffect(() => {
    fetchMenu(resID);
  }, []);

  const fetchMenu = async (resID) => {
    const data = await fetch(SWIGGY_MENU_URL + resID);
    const json = await data.json();
    setMainInfo(json?.data?.cards[2]?.card?.card?.info);
    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };
  return [mainInfo, menu];
};

export default useFetchMenu;
