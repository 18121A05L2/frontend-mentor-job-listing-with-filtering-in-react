import React from "react";
import Rectangle from "./Rectangle";
import array from "./Array";
import {v4 as uuidv4} from "uuid";

export default function App(){
  function clickedText(val){
    window.$text = val;
  }

  return (<div className="app">

    {array.map((obj) => {
      const filterArray =[obj["role"],obj["level"],...obj["languages"],...obj["tools"]];
      console.log(filterArray)
      console.log(filterArray.find( val => {
        return val==obj["role"] ? true : false ;
      }))
      return   obj["role"]=="Frontend"   &&   <Rectangle key={uuidv4()} obj={obj} clickedText={clickedText}/>
    })}
    </div>)
}
