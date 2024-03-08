import RestCards from "./RestCards";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

const [arestaurantList,asetrestaurantList] = useState(restaurantList);

    return (
        <div className="Body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>
            {
                const filteredlist = arestaurantList.filter(
                    (res)=>res.data.avgRating > 4
                );
                asetrestaurantList(filteredlist);
            }
            }>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
        {arestaurantList.map((restaurant) => {
           return <RestCards key={restaurant.data.id} {...restaurant.data}/>
        })}
            </div>

        </div>
);
}

export default Body;