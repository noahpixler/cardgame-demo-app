import { useParams } from "react-router-dom";
import { games } from "./data/games";

export default function GameStats() {
    const { gameId } = useParams();

    const game = games.find((g) => g.id === gameId);

    if (!game) {
        return <h1>Game not Found</h1>
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                {game.name} Statistics
            </h1>

            <div className="card bg-base-200 mb-6">
                <div className="card-body">
                    <h2 className="card-title">
                        Personal Stats
                    </h2>

                    <p>Games Played: 23</p>
                    <p>Wins: 12</p>
                    <p>Win Rate: 52%</p>
                    <p>Average Score: 104</p>
                </div>
            </div>

            <div className="card bg-base-200">
                <div className="card-body">
                    <h2 className="card-title">
                        Leaderboard
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Player</th>
                                    <th>Wins</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Noah</td>
                                    <td>12</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Jill</td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Jack</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>John</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}