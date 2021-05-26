import React, { useState, useContext, useEffect } from "react";
import { MdClear } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "Context/GlobalState.js";
import ToastNotification from "../MainContent/ToastNotification";

const ShoppingCartRow = ({ item }) => {
  const [amount, setAmount] = useState(item.amount);
  const { deleteItem, updateItemAmount, updateTotal } =
    useContext(GlobalContext);

  const [toastActive, setToastActive] = useState(false);
  const [toastNotificationText, setToastNotificationText] = useState(
      "Sandėlyje nėra tiek pasirinktos rūšies prekių"
  );

  const onShowAlert = (response) => {
      setToastActive(true);
      window.setTimeout(() => {
          setToastActive(false);
      }, 2000);
  };

  const onAmountChange = (e) => {
    let inputAmount = e.target.value;
    if (isNaN(inputAmount) || inputAmount <= 0) {
      inputAmount = "";
    } else if (inputAmount > item.amount) {
        onShowAlert();
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
        {toastActive && (
            <ToastNotification
                text={toastNotificationText}
                label={"danger"}
                isOpen={toastActive}
            />
        )}
      <td style={{ padding: ".1rem", width: "80px" }}>
        <img
          className="cart-photo"
          src={item.image}
          onError={(e) => {
            e.target.onError = null;
            e.target.src = "No_Image_Available.jpg";
          }}
        ></img>
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
      <td style={{ width: "80px" }}>
        <Button
          type="button"
          variant="delete"
          onClick={() => onDelete(item.id)}
        >
          <MdClear size={20} />
        </Button>
      </td>
    </tr>
  );
};

export default ShoppingCartRow;
