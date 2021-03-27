import React, { useEffect } from "react";
import ShoppingCartTable from "./ShoppingCartTable";
import ShoppingCartNote from "./ShoppingCartNote";
import ShoppingCartTotalField from "./ShoppingCartTotalField";

function ShoppingCartPage({ updateHeaderTitle }) {
  useEffect(() => {
    updateHeaderTitle("Pirkinių krepšelis");
  }, []);

  return (
    <div>
      <div className="fixed-full-screen bacround-image"></div>
      <div className="fixed-full-screen backround-color"></div>
      <ShoppingCartTable />
      <ShoppingCartNote />
      <ShoppingCartTotalField />
    </div>
  );
}

export default ShoppingCartPage;
