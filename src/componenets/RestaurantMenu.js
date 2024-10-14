import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";
import { proxyUrl, targetUrl } from "../utils/common";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
const ResturantMenu = () => {
  // const [menu, setMenu] = useState(null);
  const { id } = useParams();
  console.log("resID", id);
  const menu = useResturantMenu(id)

console.log("menu",menu);
  const data = menu?.data?.cards[2]?.card?.card?.info;

  const menuList =
    menu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;
  console.log("name", menu?.data?.cards[2]?.card?.card?.info);
  console.log(
    "menulists",
    menu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards
  );
  return menu == null ? (
    <ShimmerCard />
  ) : (
    <>
      <h1 className="font-bold">{data?.name}</h1>
      <h2 className="font-serif">{data?.cuisines.join(",")}</h2>
      <h3 className="text-red-500">{data?.costForTwoMessage}</h3>
      <h2 className="font-bold text-purple-700 underline-offset-4">Menu</h2>
      <ul className="text-green-800">
        {menuList.length > 0 ? (
          menuList.map((item, index) => (
            <li key={index}>
              {item?.card?.info?.name}{" "}
             -  <span>RS. {item?.card?.info?.price / 100}</span>
            </li>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </ul>
    </>
  );
};

export default ResturantMenu;
