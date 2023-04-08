import { useState } from "react";

export default function App() {
  const [mrp, setMRP] = useState([]);
  const sellingPrice = mrp - mrp * 0.1;
  console.log(`MRP:${mrp}, SP:${sellingPrice}`);

  function handleChange(event) {
    setMRP(event.target.value);
  }

  const [price, setPrice] = useState([{mrp:'2',sp:'2'}])
  console.log(price)
  function handleClick(){
    setPrice(prevState=>[...prevState, {mrp,sellingPrice}])
  }

  return (
    <>
      <div className="App">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>{/* render here */}</div>
    </>
  );
}
