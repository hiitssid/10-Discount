import { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";
const localStorageKey = 'thisIsKey'
export default function App() {
  //initialze state, mrp variable is set to store the number from input element
  const [mrp, setMRP] = useState([]);
  //sellingPrice is calculated at 10% discount
  const sellingPrice = mrp - mrp * 0.1;
  // console.log(`MRP:${mrp}, SP:${sellingPrice}`)
  
  //every keystroke is saved to state mrp with function setMRP, dom method of (event.target.value) is used to get the value from input field

  function handleChange(event) {
    setMRP(event.target.value);
  }

  //array price is decleared with empty object to store the mrp and sellingPrice data in the object
  //then later while developing and research in Stackoverflow, it is suggested that JSON.parse to read from localStorage directly when setting the initial
  //https://stackoverflow.com/questions/72222728/why-is-localstorage-getting-cleared-whenever-i-refresh-the-page
  const [price, setPrice] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  //when pressed 'Add' button, new object is added to price array with mrp and sellingPrice,
  function handleClick() {
    //to check if the price entered is already in price array : .some() method is used to check duplicate
    const isDuplicate = price.some(item => item.mrp === mrp)
    if(!isDuplicate){
      //...prevState will spread the older elements in the array and {mrp:mrp,sp:sellingPrice} will add current object to the array
      setPrice((prevState) => [...prevState, { mrp: mrp, sp: sellingPrice }]);
    }else{
      window.alert('The value is already added.')
    }
  }
  //setItem to localStorege : 
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(price));
  }, [price]);

  //sorting the object according to price.mrp
const sortedPrice = price.sort((a,b)=>a.mrp - b.mrp);
  //mapping the sorted data to Card element and sending datas via props to function Card() and rendering to DOM via {card}
const card = sortedPrice.map(item => {
  return <Card key={item.index} mrp={item.mrp} sp={item.sp}/>
})

  return (
    <div className="app-wrapper">
      <div className="top-form-card">
        <h1>{sellingPrice}</h1>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
        {card}
    </div>
  );
}
