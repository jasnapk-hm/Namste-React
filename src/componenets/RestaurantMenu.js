import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";
import { proxyUrl, targetUrl } from "../utils/common";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import RestaurantCategory from "./RestaurantCategory";
const ResturantMenu = () => {
  // const [menu, setMenu] = useState(null);
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  console.log("resID", id);
  const menu = useResturantMenu(id);

  console.log("menu", menu);
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

  const categories =
    menu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories", categories);

  return ((menu === null) ? (
    <ShimmerCard />
  ) : (
    <div className="text-center">
      <h1 className="font-bold">{data?.name}</h1>
      <h2 className="font-serif">{data?.cuisines.join(",")}</h2>
      <h3 className="text-red-500">{data?.costForTwoMessage}</h3>
      {/* controlled componenet */}
      {categories?.map((categories, index) => (
        <RestaurantCategory
          data={categories}
          showItem={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}

      {/* <RestaurantCategory  data={categories}/> */}
      {/* <ul className="text-green-800">
        {menuList.length > 0 ? (
          menuList.map((item, index) => (
            <li key={index}>
              {item?.card?.info?.name} -{" "}
              <span>RS. {item?.card?.info?.price / 100}</span>
            </li>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </ul> */}
    </div>
  ));
};

export default ResturantMenu;
