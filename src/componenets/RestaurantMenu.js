import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";
import { proxyUrl, targetUrl } from "../utils/common";
import { useParams } from "react-router-dom";
const ResturantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { id } = useParams();
  console.log("resID", id);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      // const targetUrl =
      //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=822315&catalog_qa=undefined&submitAction=ENTER";

      const response = await fetch(proxyUrl + targetUrl + id);
      const data = await response.json();
      console.log("data", data);
      setMenu(data);
      const recommendedItems =
        data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
          ?.card?.card?.itemCards[0].card.info;
      console.log(recommendedItems);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info
  // const { name, cuisines, costForTwoMessage } =   menu?.data?.cards[2]?.card?.card?.info
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
      <h1>{data?.name}</h1>
      <h2>{data?.cuisines.join(",")}</h2>
      <h3>{data?.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
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
