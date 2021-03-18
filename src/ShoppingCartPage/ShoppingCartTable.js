import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import ShoppingCartRow from "./ShoppingCartRow";
import tempMockItems from "./TempMockItems";

const ShoppingCartTable = () => {
  
    return (
        <Table bordered hover >
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
            { tempMockItems.map((item) => <ShoppingCartRow item={item} key={item.id} />)}
          </tbody>
        </Table>
    );
  };

  export default ShoppingCartTable;