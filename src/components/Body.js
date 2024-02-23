import { restaurantList} from "../../config";
import RestaurantCard from "../RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filteredData (searchText, restaurants) {
            
    const filterData = restaurants.filter((restaurant) => 
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return filterData;
}

const Body = () => {
   
    const [searchText,setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filterdRestaurants, setFilteredRestaurants] = useState([]);
    
    useEffect(()=>{
      getRestaurants();
    },[]);

    async function getRestaurants(){
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.642107&lng=77.188224&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") 
      const json=await data.json();
      
      setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(!allRestaurants){
      return null;
    } 
    
    return (allRestaurants.length===0)? (<Shimmer />) :(
        <>  
        <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search" 
              value={searchText}
              onChange={(e) => 
                setSearchText(e.target.value)
              }
              />
            <button className="search-btn" onClick={() => {
                const data = filteredData(searchText, allRestaurants);
                setFilteredRestaurants(data);
            
            }}
                
            >Search</button> 

             <button className="search-btn" onClick={() => {
                const filterData = allRestaurants.filter((restaurant) => 
                restaurant.info.avgRating>4.2
            )
                setFilteredRestaurants(filterData);
            
            }}>Rating</button>
        
        </div>
            
      <div className="body">
        
        {   filterdRestaurants.length===0? <h2 style={{color:"blue"}}> Restaurant not found</h2> :
              filterdRestaurants.map((restaurant) => (
                 <Link to={"/restaurant/"+restaurant.info.id} className="linked" key={restaurant.info.id}> <RestaurantCard {...restaurant.info} key= {restaurant.info.id} /> </Link>
              ))
        }
      {/* <RestaurantCard {...restaurantList[0].info} />
      <RestaurantCard {...restaurantList[1].info}/>
      <RestaurantCard {...restaurantList[2].info}/>
      <RestaurantCard {...restaurantList[3].info}/>
      <RestaurantCard {...restaurantList[4].info}/>
      <RestaurantCard {...restaurantList[5].info}/>
      <RestaurantCard {...restaurantList[6].info}/>
      <RestaurantCard {...restaurantList[7].info}/>
      <RestaurantCard {...restaurantList[8].info}/>
      <RestaurantCard {...restaurantList[9].info}/>
      <RestaurantCard {...restaurantList[10].info}/> */}
      
  
  
      </div>
      </>

  
    );
    };


export default Body;