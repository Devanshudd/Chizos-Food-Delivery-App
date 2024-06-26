import React, { useEffect, useState } from "react";
import MenuItemList from "./MenuItemList";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  // console.log(data)

  useEffect(() => window.scrollTo(0, 0), []);

  // const [showItem, setShowItem] = useState(false)
  const handleClick = () => {
    // setShowItem(!showItem)
    setShowIndex();
  };
  return (
    <div className="w-full xs:w-9/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data?.itemCards?.length})
        </span>
        {/* <span>{!showItem ? "⬇️" : "⬆️"}</span> */}
        <span className="text-red-700">
          {!showItem ? <FaAngleDown /> : <FaAngleUp />}
        </span>
      </div>

      {showItem && <MenuItemList items={data.itemCards} />}
    </div>
  );
};

const SubCategory = () => {
  return <div> sub category </div>;
};

export default RestaurantCategory;
