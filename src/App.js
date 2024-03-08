import React from "react";
import  ReactDOM  from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";



/*
  - Header
    - logo
    - navitems
  - Body
    - search
    - RestContainer
      - Restocards
  - Footer
    - Copy
*/


const MainApp = ()=>{
 return (
            <div className="MainApp">
                        <Header/>
                        <Body/>   
            </div>
        );
 
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainApp/>);