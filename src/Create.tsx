import { useState } from "react";

export default function Create() {
    const [gameName, setGameName] = useState("");
    const [minPlayers, setMinPlayers] = useState(2);
    const [maxPlayers, setMaxPlayers] = useState(4);
    const [rounds, setRounds] = useState(10);
    const [scoringType, setScoringType] = useState("highest");
    const [rules, setRules] = useState("");
    <div>
        <title>Cards Tracker | Create</title>
        <div className="p-4">
            <h1 className="pb-4 text-2xl font-bold"> Create </h1>
        </div>
    </div>

}
