import React, { useContext, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { GlobalContext } from "Context/GlobalState.js";
import { getOrderHistory } from "Service/FlowerService";
import OrderHistoryRow from "./OrderHistoryRow";

const OrderHistoryTable = () => {
  const [data, setData] = useState([]);
  const { loginInfo } = useContext(GlobalContext);

  useEffect(async () => {
    if (loginInfo.loggedIn) {
      let history = await getOrderHistory({
        loggedIn: loginInfo.loggedIn,
        email: loginInfo.email,
        password: loginInfo.password,
      });
      setData(history);
    } else {
      setData([]);
    }
  }, [loginInfo]);
  return (
    <Table bordered hover className="shopping-cart-table">
      <thead>
        <tr>
          <th>Užsakymo ID</th>
          <th>Adresas</th>
          <th>Užsakymo Data</th>
          <th>Statusas</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <OrderHistoryRow
            item={item}
            key={item.id + item.creationDate?.substring(0, 10)}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default OrderHistoryTable;
