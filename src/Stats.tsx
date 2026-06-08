import { Link } from "react-router-dom";
import { games } from "./data/games";

export default function Stats() {
    return (

        <div className="p-6">
            <title>Cards Tracker | Stats</title>
            <h1 className="text-3xl font-bold mb-6">
                Game Stats
            </h1>

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
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}