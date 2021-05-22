import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import ShoppingCartRow from "./ShoppingCartRow";
import { GlobalContext } from "Context/GlobalState.js";

const OrderHistoryTable = () => {
  const { cartItems } = useContext(GlobalContext);

  return (
    <Table bordered hover className="shopping-cart-table">
      <thead>
        <tr>
          <th></th>
          <th>Užsakymo ID</th>
          <th>Bendra kaina</th>
          <th>Prekės</th>
          <th>Statusas</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <ShoppingCartRow item={item} key={item.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default OrderHistoryTable;
