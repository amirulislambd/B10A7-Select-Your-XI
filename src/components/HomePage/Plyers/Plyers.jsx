import React, { use, useState } from "react";
import AvailablePlyers from "./AvailablePlyers/AvailablePlyers";
import SelectedPlyers from "./SelectedPlyers/SelectedPlyers";

const Plyers = ({ promiseFetchPlyers, setCoins, coins }) => {
  const plyers = use(promiseFetchPlyers);
  // console.log(plyers);

  const [selectType, setSelectType] = useState("available");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center space-y-2.5 justify-between my-8">
        {selectType === "available" ? (
          <h1 className="font-bold text-2xl">Available Players</h1>
        ) : (
          <h1 className="font-bold text-2xl">
            Selected Player ({selectedPlayers.length}/{plyers.length})
          </h1>
        )}
        <div >
          <button
            onClick={() => setSelectType("available")}
            className={`btn ${selectType === "available" ? "bg-[#E7FE29]" : "bg-[white]"}  rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectType("selected")}
            className={`btn ${selectType === "selected" ? "bg-[#E7FE29]" : "bg-[white]"}  rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectType === "available" ? (
        <AvailablePlyers
          plyers={plyers}
          setCoins={setCoins}
          coins={coins}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlyers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setCoins={setCoins}
          coins={coins}
        />
      )}
    </div>
  );
};

export default Plyers;
