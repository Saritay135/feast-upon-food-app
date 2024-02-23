import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../config";

const RestaurantMenu = () => {
    const {restId} = useParams();
    // console.log({restId});
    const [restaurant, setRestaurant] = useState([]);
    const [resMenu, setResMenu] = useState({});
    
    useEffect(() => {
       getRestaurantMenu();
    },[]);

    async function getRestaurantMenu(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.604738&lng=77.036235&restaurantId="+restId+"&catalog_qa=undefined&submitAction=ENTER") 
        const json=await data.json();
        // console.log(json);
        // console.log(json?.data?.cards[0]?.card?.card?.info);
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
        setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);


      
    }

    return (
    <div className="restMenu">
      <div className="restDetails" >
      
     <h1>{restaurant?.name}</h1>
     <img src={IMG_URL+restaurant?.cloudinaryImageId}/>
     <h3>City : {restaurant?.city}</h3>
     <h3>Area : {restaurant?.areaName}</h3>
     <h3>Rating : {restaurant?.avgRating}</h3>
     </div>
      <div>
        {/* <h2 style={marginLeft= '10px'}>Menu</h2> */}
        <h2>Menu</h2>
     <h3>
        <ul>

        { Object.values(resMenu).map((item) => (
           <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
           
        ))
    }
     </ul>
     {/* {resMenu[0]?.card?.info?.name} */}
     </h3>
     </div>
    
     </div>
    );
}

export default RestaurantMenu;