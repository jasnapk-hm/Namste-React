
import { proxyUrl, targetUrl } from "../utils/common";

const useResturantMenu =(id)=>{
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        try {
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
return menu;

}
export default useResturantMenu;