import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useFetchMenu from "../utils/useFetchMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const [mainInfo, menu] = useFetchMenu(resID);
  const [showMenuIndex, setShowMenuIndex] = useState(null);
  const [expand, setExpand] = useState(false);

  if (mainInfo === null) return <Shimmer />;

  const { name, cuisines, areaName, city, avgRating, costForTwoMessage } =
    mainInfo;

  const menuCategories = menu.filter(
    (category) =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="w-[700px] m-auto min-h-dvh">
      <h1 className="my-6 mx-2 font-bold text-2xl">{name}</h1>
      <div className="rounded-xl shadow-xl shadow-slate-300 p-6 mx-2 min-h-36">
        <h4 className="font-bold text-sm">
          {avgRating} - {costForTwoMessage}
        </h4>
        <h4 className="text-xs">
          {areaName}, {city}
        </h4>
        <h4 className="py-4 text-sm font-bold text-orange-500 underline">
          {cuisines.join(", ")}
        </h4>
      </div>
      <div>
        <h1 className="my-20 text-lg border-solid border-b border-slate-300 text-center">
          Menu
        </h1>
        {menuCategories.map((category, index) => (
          <li className="list-none" key={index}>
            <MenuCategory
              data={category?.card?.card}
              expand={index === showMenuIndex ? !expand : false}
              setShowMenuIndex={() => {
                setShowMenuIndex(index);
                index === showMenuIndex && setExpand(!expand);
              }}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
