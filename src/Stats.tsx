import { Link } from "react-router-dom";
import { games } from "./data/games";
import { getSessions } from "./utils/storage";

export default function Stats() {
  const sessions = getSessions();

  const totalGames = sessions.length;

  const wins: Record<string, number> = {};

  sessions.forEach((session) => {
    wins[session.winner] =
      (wins[session.winner] || 0) + 1;
  });

  return (
    <div className="p-6">
      <title>Cards Tracker | Stats</title>

      <h1 className="text-3xl font-bold mb-6">
        Game Stats
      </h1>

      <div className="stats shadow mb-6">
        <div className="stat">
          <div className="stat-title">
            Total Games Played
          </div>
          <div className="stat-value">
            {totalGames}
          </div>
        </div>
      </div>

      <div className="card bg-base-200 mb-6">
        <div className="card-body">
          <h2 className="card-title">
            Player Wins
          </h2>

          {Object.keys(wins).length === 0 ? (
            <p>No completed games yet.</p>
          ) : (
            <ul>
              {Object.entries(wins)
                .sort((a, b) => b[1] - a[1])
                .map(([player, winCount]) => (
                  <li
                    key={player}
                    className="flex justify-between py-1"
                  >
                    <span>{player}</span>
                    <span>{winCount} wins</span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>

      <div className="grid gap-4">
        {games.map((game) => (
          <Link
            key={game.id}
            to={`/stats/${game.id}`}
            className="card bg-base-200 hover:bg-base-300 transition"
          >
            <div className="card-body">
              <h2 className="card-title">
                {game.name}
              </h2>

              <p>
                Games Played:{" "}
                {
                  sessions.filter(
                    (s) => s.gameName === game.name
                  ).length
                }
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}