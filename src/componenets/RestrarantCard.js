
import {CDN_URL} from '../utils/common'

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
    } = resData?.info;
  
  
    return (
      <div className="card">
        <img
          alt="res"
          className="res-image"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo} </h4>
        <h4>{sla.deliveryTime} minutes</h4>
      
      </div>
    );
  };
  export default RestraCard;