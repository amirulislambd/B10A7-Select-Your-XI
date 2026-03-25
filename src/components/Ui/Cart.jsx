import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
const Cart = ({ plyer, setCoins , coins,selectedPlayers,setSelectedPlayers}) => {
  const [isSelected, setIsSelected] = useState(false);
  const coin = coins - plyer.price
  const handleChoosePlayer = () => {
    if(coin>=0){
      (setIsSelected(true), 
      setCoins(coins - plyer.price));
      setSelectedPlayers([...selectedPlayers,plyer])
    }else{
      alert('Not enough coin to purchase this player')
      return
    }
  };
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          className="w-full h-50 object-cover"
          src={plyer.playerImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center font-bold">
          <FaUser />
          <h2 className="card-title">{plyer.playerName}</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <IoFlag />
            <p>{plyer.playerCountry}</p>
          </div>
          <button className="btn btn-ghost">{plyer.playingRole}</button>
        </div>
        <div className="divider my-0"></div>
        <p>
          Rating: <span>{plyer.rating}</span>
        </p>
        <div className="flex">
          <p>{plyer.batingStyle}</p>
          <p className="text-right">{plyer.bowlingStyle}</p>
        </div>
        <div className="card-actions flex items-center justify-between">
          <p className="flex items-center">
            <span>Price: $</span>
            <span>{plyer.price}</span>
          </p>
          <button
            onClick={handleChoosePlayer}
            disabled={isSelected}
            className="btn btn-primary"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
