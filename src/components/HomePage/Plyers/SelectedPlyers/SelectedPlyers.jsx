import { toast } from "react-toastify";
import SelectedCard from "../../../Ui/SelectedCard";

const SelectedPlyers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoins,
  coins,
}) => {
  console.log("selectedPlayers", selectedPlayers);

  const handleDeleteSelectedPlayer = (player) => {
    toast.warning(`Delete cart of ${player.playerName}`, {
      position: "top-center",
      autoClose: 800,
    });
    console.log(setSelectedPlayers);
    const filterPlayers = selectedPlayers.filter(
      (selectPlayer) => selectPlayer.playerName !== player.playerName,
    );
    setSelectedPlayers(filterPlayers);
    setCoins(coins + player.price);
  };

  return (
    <div className="container mx-auto space-y-4">
      {selectedPlayers.length === 0 ? (
        <div className="text-center h-[400px] flex flex-col justify-center">
          <h2 className="text-2xl font-semibold">No Players Selected Yet</h2>
          <p>Go to Available tab select players</p>
        </div>
      ) : (
        selectedPlayers.map((player, i) => (
          <SelectedCard
            key={i}
            player={player}
            handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
          />
        ))
      )}
    </div>
  );
};

export default SelectedPlyers;
