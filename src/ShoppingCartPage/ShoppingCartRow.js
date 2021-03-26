import React, { useState, useContext, useEffect } from "react";
import { MdClear } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "Context/GlobalState.js";

const ShoppingCartRow = ({ item }) => {
  const [amount, setAmount] = useState(item.amount);
  const { deleteItem, updateItemAmount } = useContext(GlobalContext);

  const onAmountChange = (e) => {
    let inputAmount = e.target.value;
    if (isNaN(inputAmount) || inputAmount <= 0) {
      inputAmount = "";
    }
    setAmount(inputAmount);
  };

  useEffect(() => {
    updateItemAmount(item.id, amount);
  }, [amount]);

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
          min="1"
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
