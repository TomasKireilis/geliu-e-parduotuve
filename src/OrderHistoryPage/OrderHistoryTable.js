import React, { useContext, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { GlobalContext } from "Context/GlobalState.js";
import { getOrderHistory } from "Service/FlowerService";
import OrderHistoryRow from "./OrderHistoryRow";

const OrderHistoryTable = () => {
  const [data, setData] = useState([]);
  const { loginInfo } = useContext(GlobalContext);

  useEffect(async () => {
    let history = await getOrderHistory({
      loggedIn: loginInfo.loggedIn,
      email: loginInfo.email,
      password: loginInfo.password,
    });
    setData(history);
  }, []);
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
        {data.map((item) => (
          <OrderHistoryRow item={item} key={item.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default OrderHistoryTable;
