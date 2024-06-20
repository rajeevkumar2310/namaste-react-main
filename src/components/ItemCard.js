import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ data }) => {
  const { name, imageId, price, description, defaultPrice } = data;
  const dispatch = useDispatch();
  const handleAddItem = (data) => {
    dispatch(addItem(data));
  };
  return (
    <div
      data-testid="foodItem"
      className="flex justify-between px-4 py-2 m-2 border-b border-slate-300 rounded-sm"
    >
      <div className="w-10/12">
        <h1 className="font-bold text-sm">{name}</h1>
        <h1 className="text-xs">₹ {price / 100 || defaultPrice / 100}</h1>
        <h1 className="text-xs">{description}</h1>
      </div>
      <div className="w-2/12">
        <div className="mx-4 my-24 absolute">
          <button
            className=" border-green-600 border rounded-lg px-3 py-2 bg-white text-green-600"
            onClick={() => handleAddItem(data)}
          >
            Add +
          </button>
        </div>
        <img
          src={CDN_URL + imageId}
          alt="item-image"
          className="w-36 h-36 rounded-lg"
        />
      </div>
    </div>
  );
};

export default ItemCard;
