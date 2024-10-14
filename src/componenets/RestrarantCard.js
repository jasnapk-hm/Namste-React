import { CDN_URL } from "../utils/common";

const RestraCard = (props) => {
  // console.log("props", props);

  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

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
    </div>
  );
};
export default RestraCard;
