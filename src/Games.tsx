import { useNavigate } from 'react-router-dom';

export default function Games() {
    const navigate = useNavigate();

    const games = [
        { id: 1, name: "Poker", icon: "♠️", description: "Track chips, rounds, and blinds" },
        { id: 2, name: "Uno", icon: "🎴", description: "Track scores and winners" },
        { id: 3, name: "Skip-Bo", icon: "🃏", description: "Sequential card tracking game" },
        { id: 4, name: "Spades", icon: "♠️", description: "Trick-taking score tracker" },
    ];
    return (
        <>
            <title>Cards Tracker | Games</title>
            <div className="p-4">
                <h1 className="pb-4 text-2xl font-bold"> Games </h1>
            </div>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Choose a Game</h1>

                <div className="grid gap-4">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="card bg-base-200 shadow hover:shadow-lg transition"
                        >
                            <div className="card-body">
                                <h2 className="card-title">
                                    {game.icon} {game.name}
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
            </div>
            <div className="flex justify-center">
                <button
                    className="mb-4 btn btn-outline btn-primary text-xl"
                    onClick={() =>
                        navigate("/create", {
                            state: {
                                gameName: "Custom Game",
                            },
                        })
                    }
                >
                    Create Game
                </button>
            </div >
        </>
    );
}