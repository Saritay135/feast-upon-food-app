import { IMG_URL } from "../config";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating}) => {
      
    return(
        
      <div className="card"> 
          <div className="img-card">
          <img src={IMG_URL+cloudinaryImageId}/>
          </div>
          <div className="card-details">
          <h3 className="card-name">{name}</h3>
          <h4 className="card-cuisines">{cuisines.join(", ")}</h4>
          <h5>{avgRating} stars</h5>
          </div>
      </div>
    );
  }

 export default RestaurantCard; 