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
              <th style={{ textAlign: 'center'}}>Prekės pavadinimas</th>
              <th style={{ textAlign: 'center'}}>Vieneto kaina</th>
              <th style={{ textAlign: 'center'}}>Kiekis</th>
              <th style={{ textAlign: 'center'}}>Suma</th>
              <th style={{ textAlign: 'center'}}>Pašalinti</th>
            </tr>
          </thead>
          <tbody>
            { tempMockItems.map((item) => <ShoppingCartRow item={item} key={item.id} />)}
          </tbody>
        </Table>
    );
  };

  export default ShoppingCartTable;