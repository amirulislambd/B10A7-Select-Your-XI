import React, { use } from "react";
import Cart from "../../../Ui/Cart";

const AvailablePlyers = ({ plyers }) => {
  //   console.log(plyers);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {plyers.map((plyer) => <Cart plyer={plyer}/>)}
    </div>
  );
};

export default AvailablePlyers;
