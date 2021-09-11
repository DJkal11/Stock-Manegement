import React from "react";

function viewStock(props) {
  return (
    <div className="form">
      <div className="btn-group">
        <button onClick={() => props.onCall(0)}>Add Stock</button>
        <button onClick={() => props.onCall(1)}>Purchase Stock</button>
        <button id="Red">View Stock</button>
      </div>
      <h2>View Stock</h2>

      <div>
        {props.stock.map((element, index) => {
          const { item, itemsRecieved, itemPrice } = element; //destructuring
          return (
            <table id="students">
              <tbody>
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item}</td>
                  <td>{itemsRecieved}</td>
                  <td>{itemPrice}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
}

export default viewStock;
