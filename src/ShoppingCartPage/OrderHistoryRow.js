import React, { useState, useContext, useEffect } from "react";
import { MdClear } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "Context/GlobalState.js";

const OrderHistoryRow = ({ item }) => {
  const [amount, setAmount] = useState(item.amount);
  const { deleteItem, updateItemAmount, updateTotal } =
    useContext(GlobalContext);

  const onAmountChange = (e) => {
    let inputAmount = e.target.value;
    if (isNaN(inputAmount) || inputAmount <= 0) {
      inputAmount = "";
    }
    setAmount(inputAmount);
  };

  const onDelete = (id) => {
    deleteItem(id);
    updateTotal();
  };

  useEffect(() => {
    updateItemAmount(item.id, amount);
    updateTotal();
  }, [amount]);

  return (
    <tr>
      <td style={{ padding: ".1rem", width: "80px" }}>
        <td>{item.id}</td>
      </td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          value={amount}
          onChange={onAmountChange}
          style={{ width: "calc(30px + 5vw)" }}
        />
      </td>
      <td>{(item.price * amount).toFixed(2)}</td>
    </tr>
  );
};

export default OrderHistoryRow;
