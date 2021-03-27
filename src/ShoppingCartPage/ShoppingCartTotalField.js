import React, { useContext } from "react";
import { GlobalContext } from "Context/GlobalState.js";

function ShoppingCartTotalField() {
  const { totalSum } = useContext(GlobalContext);

  return (
      <div className="basket-total-container">
        Bendra suma: { }
        {totalSum.toFixed(2)}
    </div> 
  );
}

export default ShoppingCartTotalField;
