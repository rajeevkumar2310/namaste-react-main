import ItemCard from "./ItemCard";

const MenuCategory = ({ data, expand, setShowMenuIndex }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    console.log("category clicked mada fakka");
    setShowMenuIndex();
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className="cursor-pointer flex justify-between rounded-md p-2 m-2 shadow-lg shadow-slate-200 items-center"
      >
        <h1 className="font-bold p-4">
          {title} ({itemCards.length})
        </h1>
        <div>{expand ? "🔺" : "🔻"}</div>
      </div>
      {expand && (
        <div className="">
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              <ItemCard data={item?.card?.info} />
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
