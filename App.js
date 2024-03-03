import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement("div",{id:"parent"}, 
[React.createElement("div",{id:"child1"}, React.createElement("h1",{}, "h1 tag") , 
React.createElement("h2",{},"h2 tag")), React.createElement("div",{id:"child1"},
React.createElement("h1",{}, "h1 tag") , React.createElement("h2",{},"h2 tag"))] );






const heading = React.createElement("h1",{},"Hello world");

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(parent);