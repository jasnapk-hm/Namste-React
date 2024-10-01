import { useEffect, useState } from "react";

const ResturantMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl =
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=822315&catalog_qa=undefined&submitAction=ENTER";

      const response = await fetch(proxyUrl + targetUrl);
      const data = await response.json();

      const recommendedItems =
        data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
          ?.card?.card?.itemCards;
      console.log(recommendedItems);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  return (
    <>
      <h1>Restaurant Name</h1>

      <h2>Menu</h2>
      <ul>
        {menu.length > 0 ? (
          menu.map((item, index) => (
            <li key={index}>{item.card.info.name}</li> // Assuming name is available in the data structure
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </ul>
    </>
  );
};

export default ResturantMenu;
