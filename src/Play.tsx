import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import type { GameSession, Round } from "./types";
import { saveSession } from "./utils/storage";

export default function Play() {
  const nav = useNavigate();
  const location = useLocation();

  const { gameName, players } =
    (location.state as { gameName: string; players: string[] }) || {
      gameName: "Game",
      players: ["Player 1", "Player 2"],
    };

  const [startTime] = useState(new Date().toISOString());
  const [roundNumber, setRoundNumber] = useState(1);

  const [scores, setScores] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    players.forEach((p) => (initial[p] = 0));
    return initial;
  });

  const [roundHistory, setRoundHistory] = useState<Round[]>([]);

  const updateScore = (player: string, value: number) => {
    setScores((prev) => ({
      ...prev,
      [player]: value,
    }));
  };

  const saveRound = () => {
    const round: Round = {
      roundNumber,
      scores: players.map((p) => ({
        player: p,
        score: scores[p] || 0,
      })),
    };

    setRoundHistory((prev) => [...prev, round]);
    setRoundNumber((r) => r + 1);

    const reset: Record<string, number> = {};
    players.forEach((p) => (reset[p] = 0));
    setScores(reset);
  };

  const leaderboard = useMemo(() => {
    const totals: Record<string, number> = {};

    roundHistory.forEach((round) => {
      round.scores.forEach(({ player, score }) => {
        totals[player] = (totals[player] || 0) + score;
      });
    });

    return Object.entries(totals).sort((a, b) => b[1] - a[1]);
  }, [roundHistory]);

  const endGame = () => {
    const winner = leaderboard.length > 0 ? leaderboard[0][0] : "No Winner";
    const session: GameSession = {
      id: crypto.randomUUID(),
      gameName,
      players,
      startTime,
      endTime: new Date().toISOString(),
      rounds: roundHistory,
      winner,
    };

    saveSession(session);

    nav("/stats");
  };
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {gameName} — Round {roundNumber}
        </h1>

        <button className="btn btn-error btn-sm" onClick={endGame}>
          End Game
        </button>
      </div>

      <div className="space-y-3">
        {players.map((player) => (
          <div
            key={player}
            className="flex justify-between items-center bg-base-200 p-3 rounded"
          >
            <span className="font-semibold">{player}</span>

            <input
              type="number"
              className="input input-bordered w-24"
              value={scores[player]}
              onChange={(e) =>
                updateScore(player, Number(e.target.value))
              }
            />
          </div>
        ))}
      </div>

      <button className="btn btn-primary w-full" onClick={saveRound}>
        Save Round
      </button>

      <div className="card bg-base-200">
        <div className="card-body">
          <h2 className="card-title">Leaderboard</h2>

          {leaderboard.length === 0 ? (
            <p>No rounds yet</p>
          ) : (
            <ol className="space-y-1">
              {leaderboard.map(([player, score]) => (
                <li key={player} className="flex justify-between">
                  <span>{player}</span>
                  <span className="font-bold">{score}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>

      <div className="card bg-base-200">
        <div className="card-body">
          <h2 className="card-title">Round History</h2>

          {roundHistory.map((round) => (
            <div key={round.roundNumber} className="mb-3">
              <p className="font-bold">Round {round.roundNumber}</p>

              {round.scores.map((s) => (
                <div key={s.player} className="text-sm flex justify-between">
                  <span>{s.player}</span>
                  <span>{s.score}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}