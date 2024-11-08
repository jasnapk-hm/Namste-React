import { useContext } from "react";
import { CDN_URL } from "../utils/common";
import userContext from "../utils/userContext";

const RestraCard = (props) => {
  console.log("props", props);

  const { resData } = props;
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  const {loggeduser}= useContext(userContext)

  console.log("props", aggregatedDiscountInfoV3);
console.log();
  return (
    <div className=" m-4 p-4 w-[250px] rounded-lg h-[450px] overflow-auto overflow-hidden bg-slate-300">
      <img
        alt="res"
        className="w-30 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="flex overflow-hidden">{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>user :{loggeduser}</h4>
    </div>
  );
};

//higher order componenet
// take restra carsas input and give an enhanced componet

export const withPromotedLabel = (RestraCard) => {
  return (props) => {
    const { resData } = props;
    return (
      <div>
        <label className=" p-2 m-3  font-bold bg-black text-cyan-50 text-ellipsis rounded-lg">
          {resData?.info?.aggregatedDiscountInfoV3?.header}
          <span>{resData?.info?.aggregatedDiscountInfoV3?.subHeader}</span>
         
        </label>
        <RestraCard {...props} />
      </div>
    );
  };
};
export default RestraCard;
