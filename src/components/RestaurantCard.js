import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    resData.info;
  const { user } = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-64 h-[400px] shadow-xl hover:shadow-slate-400 hover:shadow-2xl hover:bg-slate-100 text-lg rounded-md dark:bg-slate-100"
    >
      <img
        className="w-full h-48 rounded-md"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-xl font-bold py-2">{name}</h3>
      <h4 className="text-lg">{cuisines.join(", ")}</h4>
      <h4 className="text-lg">{avgRating}</h4>
      <h4 className="text-lg">{costForTwo}</h4>
      <h4 className="text-sm font-bold">{user}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute m-6 px-4 bg-black text-white font-semibold rounded-lg">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
