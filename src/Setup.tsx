import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

type PlayerEntry = {
  name: string;
  checked: boolean;
};

export default function Setup() {
  const nav = useNavigate();
  const location = useLocation();

  const { gameName } = location.state as { gameName: string };

  const [players, setPlayers] = useState<PlayerEntry[]>([
    { name: "Noah", checked: true },
    { name: "Sarah", checked: false },
  ]);

  const [newPlayer, setNewPlayer] = useState("");

  const togglePlayer = (name: string) => {
    setPlayers((prev) =>
      prev.map((p) =>
        p.name === name ? { ...p, checked: !p.checked } : p
      )
    );
  };

  const addPlayer = () => {
    if (!newPlayer.trim()) return;
    if (players.some((p) => p.name === newPlayer)) return;

    setPlayers((prev) => [
      ...prev,
      { name: newPlayer, checked: true },
    ]);

    setNewPlayer("");
  };

  const selectedPlayers = players.filter((p) => p.checked);

  const canStart = selectedPlayers.length >= 2;

  const startGame = () => {
    nav("/play", {
      state: {
        gameName,
        players: selectedPlayers.map((p) => p.name),
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">

      <h1 className="text-3xl font-bold">
        Setup — {gameName}
      </h1>

      <div className="flex gap-2">
        <input
          className="input input-bordered w-full"
          placeholder="Add player"
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addPlayer}>
          Add
        </button>
      </div>

      <div className="space-y-2">
        {players.map((p) => (
          <label
            key={p.name}
            className="flex items-center gap-3 p-3 bg-base-200 rounded"
          >
            <input
              type="checkbox"
              className="checkbox"
              checked={p.checked}
              onChange={() => togglePlayer(p.name)}
            />
            <span>{p.name}</span>
          </label>
        ))}
      </div>

      <button
        className="btn btn-success w-full"
        disabled={!canStart}
        onClick={startGame}
      >
        {canStart
          ? "Start Game"
          : "Select at least 2 players"}
      </button>
    </div>
  );
}