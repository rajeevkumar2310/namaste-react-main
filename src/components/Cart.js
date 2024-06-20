import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemCard from "./ItemCard";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const items = useSelector((store) => store.cart.items);
  return (
    <div className="w-6/12 m-auto min-h-dvh">
      <div className="text-center">
        <h1 className="font-bold text-2xl m-8 p-2">Cart</h1>
        <button
          className="m-4 bg-black text-white rounded-lg p-2 shadow-lg shadow-slate-700 cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {items.map((item) => (
        <li key={item.id} className="border-b-slate-200">
          <ItemCard data={item} />
        </li>
      ))}
    </div>
  );
};

export default Cart;
