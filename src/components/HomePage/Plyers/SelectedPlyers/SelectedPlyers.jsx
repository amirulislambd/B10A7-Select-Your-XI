import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlyers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoins,
  coins,
}) => {
  console.log("selectedPlayers", selectedPlayers);

  const handleDeleteSelectedPlayer = (player) => {
    console.log(setSelectedPlayers);
    const filterPlayers = selectedPlayers.filter(
      (selectPlayer) => selectPlayer.playerName !== player.playerName,
    );
    setSelectedPlayers(filterPlayers);
    setCoins(coins+player.price)
  };

  return (
    <div className="container mx-auto space-y-4">
      {selectedPlayers.map((player, i) => (
        <div
          key={i}
          className="flex justify-between items-center border p-5 rounded-xl"
        >
          <div>
            <div className="flex gap-2 items-center ">
              <img
                className="h-[90px] w-[100px] rounded-xl"
                src={player.playerImage}
                alt={player.playerName}
              />
              <div>
                <h2 className="font-bold text-2xl flex items-center gap-2">
                  <FaUser />
                  {player.playerName}
                </h2>
                <p className="text-lg">{player.playingRole}</p>
                <p className="border-2 shadow-2xl rounded-2xl px-2 border-gray-100">Price: {player.price}</p>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleDeleteSelectedPlayer(player)}
              className="btn text-rose-500"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlyers;
