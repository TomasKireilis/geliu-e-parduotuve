import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import ShoppingCartRow from "../ShoppingCartPage/ShoppingCartRow";
import { GlobalContext } from "Context/GlobalState.js";
import IntegrationServiceBuyTableRow from "./IntegrationServiceBuyTableRow";

const IntegrationServiceBuyTable = () => {
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
          <th>Prekės pavadinimas</th>
          <th>Kiekis sandėlyje</th>
          <th>Vieneto kaina</th>
          <th>Pirkimo Kiekis</th>
          <th>Pirkimo Suma</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <IntegrationServiceBuyTableRow item={item} key={item.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default IntegrationServiceBuyTable;
