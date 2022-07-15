import React from "react";
import Images from "./images";


export default function Rectangle(props){
  const obj=props.obj;

  return (<div id={ obj["top_tags"][2] && "feature-border"} className="rectangle">
    <img src={Images[obj["top_tags"][0]]} alt=""/>
    <div className="leftflex">
    <div className="toptags">
      <h4>{obj["top_tags"][0]}</h4>
      { obj["top_tags"][1]  && <span className="new" >{obj["top_tags"][1]}</span> }
      { obj["top_tags"][2]  && <span className="featured" >{obj["top_tags"][2]}</span> }
    </div>
    <h3>{obj["main_role"]}</h3>
    <div className="downtags">
      <span>{obj["down_tags"][0]}</span>
      <span>{obj["down_tags"][1]}</span>
      <span>{obj["down_tags"][2]}</span>
    </div>
    </div>

    <div className="rightflex">
      <span className="right" > {obj["role"]} </span>
      <span className="right" > {obj["level"] }</span>
      <span className="right" >{ obj["languages"][0] }</span>
      {obj["languages"][1]  &&  <span className="right" > {obj["languages"][1] } </span>}
      {obj["languages"][2]  &&  <span className="right" > {obj["languages"][2] } </span> }
      {obj["tools"][0]  &&  <span className="right" > {obj["tools"][0] }     </span> }
      {obj["tools"][1]  &&  <span className="right" > {obj["tools"][1] }     </span> }

    </div>


    </div>);
}
