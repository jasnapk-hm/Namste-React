import { useEffect, useState } from "react";
import RestraCard, { withPromotedLabel } from "./RestrarantCard";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestrarants, setListOfRestrarants] = useState([]);
  const [serachtext, setSearchText] = useState("");
  const [filteredRestrarant, setFilteredRestrarants] = useState([]);
  console.log(useState(), "usestate");
  const RestaurantCardPromoted = withPromotedLabel(RestraCard);
  const status = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(proxyUrl + targetUrl);
    const data = await response.json();
    console.log("dataa", data);
    console.log(
      "Fetched data:",
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestrarants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestrarants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log("list", listOfRestrarants.length);
  if (status === false) {
    return <h1>Please check your network.........!!!!!!!! 🔥</h1>;
  }

  return listOfRestrarants?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="m-4 p-4">
      <div className="Filter flex">
        <div>
          <input
            type="text"
            className="border border-solid border-black"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>{" "}
          <button
            className="bg-green-200 px-4 py-4 m-2 rounded-lg"
            onClick={() => {
              const filteredRestrarants = listOfRestrarants.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(serachtext.toLocaleLowerCase());
              });

              setFilteredRestrarants(filteredRestrarants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-slate-200  px-4 py-4 m-2 rounded-lg"
          onClick={() => {
            console.log("clicked");
            const Restrarant = listOfRestrarants.filter((res) => {
              console.log(res?.info?.avgRatingString);
              return res?.info?.avgRatingString > 4.5;
            });
            console.log("filterrrs", Restrarant);
            setListOfRestrarants(Restrarant);
          }}
        >
          Top Rated Restrarants
        </button>{" "}
      </div>
      <div className="restra-container flex  flex-wrap hover:">
        {filteredRestrarant.map((resturants) => (
          <Link
            key={resturants.info.id}
            to={"/restaurant/" + resturants?.info?.id}
          >
            {resturants?.info?.aggregatedDiscountInfoV3?.header ? (
              <RestaurantCardPromoted resData={resturants} />
            ) : (
              <RestraCard resData={resturants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
