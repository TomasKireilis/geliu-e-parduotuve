import React, { useEffect } from "react";
import ShoppingCartTable from "./ShoppingCartTable";

import ShoppingCartNote from "./ShoppingCartNote";

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
    </div>
  );
}

export default ShoppingCartPage;
