import React, { useState, useContext, useEffect } from "react";
import { MdClear } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "Context/GlobalState.js";

const IntegrationServiceBuyTableRow = ({ item, setItemPrice }) => {
  const [amount, setAmount] = useState(3);

  const onAmountChange = (e) => {
    let inputAmount = e.target.value;
    if (isNaN(inputAmount) || inputAmount <= 0) {
      inputAmount = "";
    }
    setAmount(inputAmount);
    setItemPrice(item.id, +(item.price * inputAmount).toFixed(2));
  };
  // useEffect(() => {
  //   setItemPrice(item.id, +(item.price * amount).toFixed(2));
  // }, []);

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>
        <input
          type="number"
          name="amount"
          id="amount"
          min="0"
          defaultValue={3}
          onChange={onAmountChange}
          style={{ width: "calc(30px + 5vw)" }}
        />
      </td>
      <td>{(item.price * amount).toFixed(2)}</td>
    </tr>
  );
};

export default IntegrationServiceBuyTableRow;
