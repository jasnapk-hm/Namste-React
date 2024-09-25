import { resObj } from "../utils/mockData";
import RestraCard from "./RestrarantCard";

const Body = () => {
    return (
      <div className="body">
        <div className="serach"> Search</div>
        <div className="restra-container">
          {resObj.map((resturants) => (
            <RestraCard key={resturants.info.id} resData={resturants} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;