import React, { useState, useContext, useEffect } from "react";
import { MdClear } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "Context/GlobalState.js";

const OrderHistoryRow = ({ item }) => {
  return (
    <tr>
      <td>{item.orderId}</td>
      <td>{item.shippingAddress}</td>
      <td>{item.creationDate?.substring(0, 10)}</td>

      <td>{item.status}</td>
    </tr>
  );
};

export default OrderHistoryRow;
