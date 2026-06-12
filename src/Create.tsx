import { useState } from "react";

export default function Create() {
    const [gameName, setGameName] = useState("");
    const [minPlayers, setMinPlayers] = useState(2);
    const [maxPlayers, setMaxPlayers] = useState(4);
    const [rounds, setRounds] = useState(1);
    const [scoringType, setScoringType] = useState("highest");
    const [rules, setRules] = useState("");
    <div>
        <title>Cards Tracker | Create</title>
        <div className="p-4">
            <h1 className="pb-4 text-2xl font-bold"> Create </h1>
        </div>
    </div>
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const gameTemplate = {
            gameName,
            minPlayers,
            maxPlayers,
            rounds,
            scoringType,
            rules,
        };

        const existingTemplates = JSON.parse(
            localStorage.getItem("gameTemplates") || "[]"
        );

        existingTemplates.push(gameTemplate);

        localStorage.setItem(
            "gameTemplates",
            JSON.stringify(existingTemplates)
        );

        console.log("Saved:", gameTemplate);

        alert(`${gameName} template created!`);
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Create New Game
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="label">
                        <span className="label-text">Game Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="poker"
                        className="input input-bordered w-full"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Minimum Players</span>
                        </label>
                        <input
                            type="number"
                            min="1"
                            className="input input-bordered w-full"
                            value={minPlayers}
                            onChange={(e) =>
                                setMinPlayers(Number(e.target.value))
                            }
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Maximum Players</span>
                        </label>
                        <input
                            type="number"
                            min="1"
                            className="input input-bordered w-full"
                            value={maxPlayers}
                            onChange={(e) =>
                                setMaxPlayers(Number(e.target.value))
                            }
                        />
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">
                            Number of Rounds
                        </span>
                    </label>
                    <input
                        type="number"
                        min="1"
                        className="input input-bordered w-full"
                        value={rounds}
                        onChange={(e) =>
                            setRounds(Number(e.target.value))
                        }
                    />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">
                            Scoring Type
                        </span>
                    </label>

                    <select
                        className="select select-bordered w-full"
                        value={scoringType}
                        onChange={(e) =>
                            setScoringType(e.target.value)
                        }
                    >
                        <option value="highest">
                            Highest Score Wins
                        </option>
                        <option value="lowest">
                            Lowest Score Wins
                        </option>
                        <option value="custom">
                            Custom
                        </option>
                    </select>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">
                            Rules / Notes
                        </span>
                    </label>

                    <textarea
                        className="textarea textarea-bordered w-full"
                        rows={5}
                        placeholder="Describe how scoring works..."
                        value={rules}
                        onChange={(e) => setRules(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    Save Template
                </button>
            </form>
        </div>
    );
}
