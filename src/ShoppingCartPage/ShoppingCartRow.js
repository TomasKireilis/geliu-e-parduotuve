import React, { useState, useContext } from "react";
import { MdClear } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { GlobalContext } from '../context/GlobalState.js';

const ShoppingCartRow = ({ item }) => {
  const [amount, setAmount] = useState(item.amount);
  const { deleteItem } = useContext(GlobalContext);

  const onAmountChange = (e) => {
    let inputAmount = e.target.value;
    if (isNaN(inputAmount) || inputAmount <= 0) {
      inputAmount = "";
    }
    setAmount(inputAmount);
  };

  return (
    <tr>
      <td>
        <img className="cartPhoto" src={item.image} />
      </td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={onAmountChange}
        />
      </td>
      <td>{(item.price * amount).toFixed(2)}</td>
      <td>
        <Button
          type="button"
          variant="delete"
          onClick={() => deleteItem(item.id)}
        >
          <MdClear size={20} />
        </Button>
      </td>
    </tr>
  );
};

export default ShoppingCartRow;
