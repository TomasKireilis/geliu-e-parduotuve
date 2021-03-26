import React, { useEffect, useRef, useState, useContext } from "react";
import { GlobalContext } from "Context/GlobalState.js";

function ShoppingCartNote() {
  const { cartNote, updateCartNote } = useContext(GlobalContext);
  const textAreaRef = useRef();
  const [message, setMessage] = useState(cartNote);
  const [rows, setRows] = useState(2);

  useEffect(() => {
    const rows = message?.split("\n").length + 1;
    setRows(rows);
    updateCartNote(message);
  }, [message]);

  return (
    <div className="basket-note-container">
      <textarea
        ref={textAreaRef}
        className="basket-note-textarea product-container "
        placeholder={`Sveikinimo žinutė. 
Palikite tusčią jei nenorite pridėti žinutės`}
        rows={rows}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        defaultValue={cartNote}
      ></textarea>
    </div>
  );
}

export default ShoppingCartNote;
