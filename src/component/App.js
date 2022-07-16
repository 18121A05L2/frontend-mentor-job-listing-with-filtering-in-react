import React from "react";
import Rectangle from "./Rectangle";
import array from "./Array";
import {v4 as uuidv4} from "uuid";

export default function App(){
  const [texts,setTexts] = React.useState([])
  function clickedText(val){
    setTexts( prev => {
      if (prev.includes(val)) {return prev} else {return [...prev,val]}
    })
  }
  function handleClear(){
    setTexts([])
  }
  function handleDelete(event){
    console.log(event.name)
  }

  return (
    <div className="app">
    <div className="imageheader" ></div>
    {texts.length !== 0 && <div className="filter" > {texts.map(item => {
      return (
        <span className="filteritem">{item} <div className="deleteSelected"
        onClick={() => {
          setTexts(prev => {
            return prev.filter((heb) =>{
              return heb!==item
            } )
          })
        } } >X</div></span>
      )
    }  )} <a href="#" onClick={handleClear}>clear</a> </div>}
    {array.filter( val => {
      const filterArray =[val["role"],val["level"],...val["languages"],...val["tools"]];
      let bool = 0 ;
      texts.forEach( singleText => {if (filterArray.includes(singleText)) {bool +=1} else {bool=0} });
      if (texts.length == bool) {return val}
    }).map((obj) => {
      return  <Rectangle key={uuidv4()} obj={obj} clickedText={clickedText}/>
    })}
    </div>)
}
