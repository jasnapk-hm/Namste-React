import React from "react";
import { CDN_URL } from "../utils/common";

export default function AccordianBody({ items }) {
//   console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-b-2 p-2 m-2 text-left flex justify-between"
        >
          <div className="w-9/12 justify-evenly">
            <span className=" font-bold"> {item?.card?.info?.name}</span>{" "}
            <span className="p-2">
              {" "}
              ⟨₹⟩ -{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}{" "}
            </span>
            <p className="text-xs py-2">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 ">
            <div className="absolute mx-10 ">
              <button className="bg-black text-white border-2 rounded-lg p-2 shadow-lg">
                Add +
              </button>
            </div>

            <img
              className="w-15 h-19 p-2 m-2"
              src={CDN_URL + `${item?.card?.info?.imageId}`}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
}
