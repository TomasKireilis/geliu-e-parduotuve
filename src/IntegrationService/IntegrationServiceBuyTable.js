import React, { useContext, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { GlobalContext } from "Context/GlobalState.js";
import { getAllFlowers } from "Service/FlowerService.js";
import IntegrationServiceBuyTableRow from "./IntegrationServiceBuyTableRow";

const IntegrationServiceBuyTable = ({ setBasketPrice }) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const a = JSON.parse(JSON.stringify(await getAllFlowers()));

    setData(a);
    let newItemPrice = [];
    for (let i = 0; i < a.length; i++) {
      const element = a[i];
      newItemPrice = [
        ...newItemPrice,
        { id: element.id, price: +element.price * +3 },
      ];
    }
    setItemPrice(newItemPrice);

    let priceSum = 0;
    for (let i = 0; i < newItemPrice.length; i++) {
      const element = newItemPrice[i];
      priceSum += element.price;
    }

    setBasketPrice(priceSum);
  }, []);

  const [itemPrice, setItemPrice] = useState([]);

  const updateSum = (id, value) => {
    let priceSum = 0;
    let newItemPrice = itemPrice;
    newItemPrice = newItemPrice.filter((x) => id !== x.id);

    newItemPrice = [...newItemPrice, { id: id, price: +value }];

    setItemPrice(newItemPrice);

    for (let i = 0; i < newItemPrice.length; i++) {
      const element = newItemPrice[i];
      priceSum += element.price;
    }

    setBasketPrice(priceSum);
  };

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
          <th>Pirkimo Kiekis</th>
          <th>Tiekėjo kaina EUR</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <IntegrationServiceBuyTableRow
            item={item}
            key={item.id}
            setItemPrice={(id, value) => updateSum(id, value)}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default IntegrationServiceBuyTable;
