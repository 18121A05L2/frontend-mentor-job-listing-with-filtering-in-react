import React from "react";
import Rectangle from "./Rectangle"
import array from "./Array"
import {v4 as uuidv4} from "uuid"

export default function App(){
  return (<div className="app">

    {array.map((val) => {
      return <Rectangle key={uuidv4()} obj={val}/>
    })}
    </div>)
}
