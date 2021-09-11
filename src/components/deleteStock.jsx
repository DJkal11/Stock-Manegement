import React, { useState } from "react";

function DeleteStock(props) {
  const [removeStock, setRemoveStock] = useState(props.stock);
  const [product, setProduct] = useState("");
  const [email, setEmail] = useState("");
  const [preValue, setPreValue] = useState(removeStock);

  function getProductCode(event) {
    const value = event.target.value;
    setProduct(value);
    sendEmail();
  }

  // Gets input from user and calculates average price
  function getDeleteStock(event) {
    const value = event.target.value;
    const name = event.target.getAttribute("name");
    const index = parseInt(product, 10);
    let newArr = [...removeStock];
    let prevObj = { ...preValue[index] };
    let obj = { ...newArr[index] };
    obj[name] = parseInt(prevObj[name], 10) - parseInt(value, 10);

    newArr[index] = obj;
    setRemoveStock(newArr);

    handlePreviousValue();
  }

  function handlePreviousValue() {
    setPreValue(removeStock);
  }

  // gets email from user
  function getEmail(event) {
    const value = event.target.value;
    setEmail(value);
  }

  // sends email to App.jsx fro validation
  function sendEmail() {
    props.onEmail(email);
  }

  return (
    <div className="form">
      <div className="btn-group">
        <button onClick={() => props.onCall(0)}>Add Stock</button>
        <button id="Red">Purchase Stock</button>
        <button onClick={() => props.onCall(2)}>View Stock</button>
      </div>
      <h2>Delete Stock</h2>
      <div className="dropBox">
        <label>Buyer Email Address</label>
        <input type="email" onChange={getEmail} value={email} name="Email" />

        <div className="Product">
          <label>Select a Product Code</label>
          <select
            onChange={getProductCode}
            value={product}
            name="item"
            id="Stock"
          >
            <option value={""}>--Please choose an option--</option>
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
      </div>

      <div>
        <label>Items Bought</label>
        <input
          onChange={getDeleteStock}
          value={removeStock.itemsRecieved}
          name="itemsRecieved"
        />
      </div>

      <div className="dropBox">
        <button onClick={() => props.onUpdate(removeStock)}>
          <span>Remove Stock</span>
        </button>
      </div>
    </div>
  );
}

export default DeleteStock;
