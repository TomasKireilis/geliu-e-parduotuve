import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import ShoppingCartRow from "./ShoppingCartRow";
import { GlobalContext } from "Context/GlobalState.js";

const ShoppingCartTable = () => {
  const { cartItems } = useContext(GlobalContext);

  return (
    <Table
      bordered
      hover
      className="shopping-cart-table "
      style={{ marginTop: "10px" }}
    >
      <thead>
        <tr>
          <th></th>
          <th>Prekės pavadinimas</th>
          <th>Vieneto kaina</th>
          <th>Kiekis</th>
          <th>Suma</th>
          <th>Pašalinti</th>
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

export default ShoppingCartTable;
