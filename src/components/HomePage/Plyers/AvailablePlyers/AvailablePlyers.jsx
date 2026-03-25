import React, { use } from "react";
import Cart from "../../../Ui/Cart";

const AvailablePlyers = ({ plyers,setCoins,coins,selectedPlayers,setSelectedPlayers }) => {
  //   console.log(plyers);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {plyers.map((plyer,i) => <Cart key={i} 
      plyer={plyer} setCoins={setCoins} coins={coins} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>)}
    </div>
  );
};

export default AvailablePlyers;
