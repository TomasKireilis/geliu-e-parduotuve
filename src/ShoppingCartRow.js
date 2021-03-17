import React, { useState } from 'react';
import { MdClear } from 'react-icons/md';

const ShoppingCartRow = ({ item }) => {
    const [amount, setAmount] = useState(item.amount);

    const deleteFromCart = () => {
    };

    const onAmountChange = (e) => {
        let inputAmount = e.target.value;
        if (isNaN(inputAmount) || inputAmount <= 0) {
            inputAmount = '';
        }
        setAmount(inputAmount);
      };
  
    return (
        <tr>
            <td><img className="cartPhoto" src={item.image} /></td>
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
                <button
                    type="button"
                    style={{ border: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
                    onClick={() => deleteFromCart(item.id)}
                    >
                 <MdClear />
                </button>
            </td>
        </tr>
    );
  };

  export default ShoppingCartRow;