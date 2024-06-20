import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState(false);
  const isOnline = useOnlineStatus();
  const [dark, setDark] = useState(false);
  const { user } = useContext(UserContext);
  const items = useSelector((store) => store.cart.items);

  const toggleDarkMode = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between shadow-lg shadow-slate-300 dark:bg-slate-800 dark:text-white">
      <div className="w-32 flex items-center">
        <img
          alt="food app logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4MrpJVVh45uKulQVIefwzC2FycDx2Au7mg&s"
        />
      </div>
      <div className="flex items-center">
        <div className="bg-white dark:bg-slate-900 dark:text-white">
          <button
            onClick={() => toggleDarkMode()}
            className="px-4 rounded-lg  shadow-lg hover:shadow-xl shadow-slate-300"
          >
            {dark ? "Set Light Theme" : "Set Dark Theme"}
          </button>
        </div>
        <ul className="flex m-4 p-4">
          {isOnline && (
            <div
              className={
                login
                  ? "rounded-full w-4 m-auto p-2 bg-green-600"
                  : "rounded-full w-4 m-auto p-2 bg-red-600"
              }
            ></div>
          )}
          <div data-testid="onlineStatus" className="p-4 font-bold">
            {isOnline ? "Online" : "Offline"}
          </div>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 font-bold">
            <Link to="/cart">Cart - {items.length} Items</Link>
          </li>
          <li className="p-4 font-bold">{user}</li>
          <button
            className="px-8 border border-solid border-black bg-slate-100 rounded-md shadow-lg dark:bg-slate-500"
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
