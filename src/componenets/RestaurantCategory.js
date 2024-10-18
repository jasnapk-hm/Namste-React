import { useState } from "react";
import AccordianBody from "./AccordianBody";

const RestaurantCategory = ({ data,showItem,setShowIndex }) => {
  console.log("data category", data);

//   const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    // console.log("clicked");
    // setShowItem(!showItem);
    setShowIndex()
  };
  return (
    <div>
      {/* <ul className="text-center"> */}
        <div
          className="bg-gray-50 my-5   cursor-pointer w-6/12 shadow-xl  m-auto text-center "
          onClick={handleClick}
        >
          <span className="flex justify-between font-bold">
            {data?.card?.card?.title} ({data?.card?.card?.itemCards.length}){" "}
            <span>⤵ </span>
          </span>
          {showItem && <AccordianBody items={data?.card?.card?.itemCards} />}
        </div>
      {/* </ul> */}
    </div>
  );
};
export default RestaurantCategory;
