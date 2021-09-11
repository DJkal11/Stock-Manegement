import React, { useState } from "react";

function AddStock(props) {
  const [Input, setInput] = useState(props.stock);

  const [product, setProduct] = useState("");
  const [preValue, setPreValue] = useState(Input);

  // Gets input from user and calculates sum of stock
  function getInput(event) {
    const value = event.target.value;
    const name = event.target.getAttribute("name");
    const index = parseInt(product, 10);
    let newArr = [...Input];
    let prevObj = { ...preValue[index] };
    let obj = { ...newArr[index] };
    obj[name] = parseInt(value, 10) + parseInt(prevObj[name], 10);
    newArr[index] = obj;
    setInput(newArr);
    props.onUpdate(newArr);
    handlePreviousValue();
  }

  // Gets input from user and calculates average price
  function getPrice(event) {
    const value = event.target.value;
    const name = event.target.getAttribute("name");
    const index = parseInt(product, 10);
    let newArr = [...Input];
    let prevObj = { ...preValue[index] };
    let obj = { ...newArr[index] };
    obj[name] =
      (Math.round(value * 100) + Math.round(prevObj[name] * 100)) / 100 / 2;
    newArr[index] = obj;
    setInput(newArr);
    props.onUpdate(newArr);
    handlePreviousValue();
  }

  function handlePreviousValue() {
    setPreValue(Input);
  }

  // Specifies which product to calculate stock and price
  function getProductCode(event) {
    const value = event.target.value;
    setProduct(value);
  }

  return (
    <div className="form">
      <div className="btn-group">
        <button id="Red">Add Stock</button>
        <button onClick={() => props.onCall(1)}>Purchase Stock</button>
        <button onClick={() => props.onCall(2)}>View Stock</button>
      </div>
      <h2>Add Stock</h2>
      <label>Items Recieved</label>
      <input
        onChange={getInput}
        name="itemsRecieved"
        value={Input.itemsRecieved}
      />

      <div>
        <label>Price per Item Recieved</label>
        <input
          type="number"
          onChange={getPrice}
          name="itemPrice"
          value={Input.itemPrice}
        />
      </div>

      <div className="dropBox">
        <label>Select a Product Code</label>
        <select
          onChange={getProductCode}
          name="item"
          value={product}
          id="Stock"
        >
          <option value="">--Please choose an option--</option>
          <option name="Stock" value={0}>
            Product1
          </option>
          <option name="Stock" value={1}>
            Product2
          </option>
          <option name="Stock" value={2}>
            Product3
          </option>
        </select>
      </div>

      <div className="dropBox">
        <button onClick={() => props.onUpdate}>
          <span>Add Stock</span>
        </button>
      </div>
    </div>
  );
}

export default AddStock;
