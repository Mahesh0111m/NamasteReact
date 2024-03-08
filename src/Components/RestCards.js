import { CON_URL } from "../utils/constants";



const RestCards=(props)=>{
    const { cloudinaryImageId,
       name,
       cuisines,
       area,
       lastMileTravelString,
       costForTwoString,
       avgRating,
       deliveryTime
     } = props;
   
       return (
                   <div className="rest-cards">
                       <img alt=" rest-logo" className="res-logo"  src={CON_URL
              +
             cloudinaryImageId 
           }/>
           
                   <h4>{name}</h4>
                   <h4>{cuisines[0]}</h4>
                   <h4>{avgRating} Ratings</h4>
                   <h4>{costForTwoString}</h4>
                   <h4>{deliveryTime} minutes</h4>
                   </div>
       );
   }

   export default RestCards;