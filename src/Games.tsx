import { useNavigate } from "react-router-dom";
import { getTemplates } from "./utils/storage";

export default function Games() {
    const navigate = useNavigate();
    const templates = getTemplates();

    const games = [
        { id: 1, name: "Poker", description: "Track chips, rounds, and blinds",},
        { id: 2, name: "Uno", description: "Track scores and winners",},
        {id: 3, name: "Skip-Bo", description: "Sequential card tracking game",},
        {id: 4, name: "Spades", description: "Trick-taking score tracker",},
    ];

    return (
        <div className="p-6">
            <title>Cards Tracker | Games</title>

            <h1 className="text-3xl font-bold mb-6">Games</h1>

            <h2 className="text-2xl font-semibold mb-4">Built-In Games</h2>

            <div className="grid gap-4">
                {games.map((game) => (
                    <div key={game.id} className="card bg-base-200 shadow hover:shadow-lg transition">
                        <div className="card-body">
                            <h2 className="card-title">
                                {game.name}
                            </h2>

                            <p>{game.description}</p>

                            <button
                                className="btn btn-primary mt-2"
                                onClick={() =>
                                    navigate("/setup", {
                                        state: {
                                            gameName: game.name,
                                        },
                                    })
                                }
                            >
                                Select
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {templates.length > 0 && (
                <>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Custom Templates</h2>

                    <div className="grid gap-4">
                        {templates.map((template) => (
                            <div key={template.id} className="card bg-primary text-primary-content shadow">
                                <div className="card-body">
                                    <h2 className="card-title">{template.gameName}</h2>

                                    <p>Players: {template.minPlayers} -{" "} {template.maxPlayers}
                                    </p>

                                    <p>Rounds: {template.rounds}</p>

                                    <p>Scoring: {template.scoringType}</p>

                                    {template.rules && (
                                        <p>Rules: {template.rules}</p>
                                    )}

                                    <button
                                        className="btn mt-2"
                                        onClick={() =>
                                            navigate("/setup", {
                                                state: {
                                                    gameName: template.gameName,
                                                },
                                            })
                                        }
                                    >
                                        Play
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            <div className="flex justify-center mt-8">
                <button
                    className="btn btn-outline btn-primary text-xl"
                    onClick={() => navigate("/create")}
                >
                    Create Game
                </button>
            </div>
        </div>
    );
}