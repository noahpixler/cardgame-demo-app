export const APP_TITLE = "Cards Tracker";

export default function Home() {
    return (
        <>
            <div className="p-4">
                <h1 className="pb-4 text-2xl font-bold"> Home </h1>
                <button className="btn btn-lg">Start New Session</button>
                <br />
            </div>
            <div className="p-4">
                <h1 className="pb-4 text-2xl font-bold">No Active Session</h1>
                <h2 className="text">Start a new game to begin tracking.</h2>
            </div>

            <div className="grid grid-cols-1 gap-2 w-1/8">
                <div className="card bg-base-200">
                    <div className="card-body text-center">
                        <button className="btn">Skip-Bo</button>
                    </div>
                </div>
                <div className="card bg-base-200">
                    <div className="card-body text-center">
                        <button className="btn">Poker</button>
                    </div>
                </div>
                <div className="card bg-base-200">
                    <div className="card-body text-center">
                        <button className="btn">Uno</button>
                    </div>
                </div>
            </div>
            <div className="card w-1/2">
                <div className="p-3 m-3 overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <h2 className="text-xl font-bold">Personal Stats</h2>

                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Last Played</td>
                                <th>1 hr ago</th>
                            </tr>
                            <tr>
                                <td>Total Games</td>
                                <th>6</th>
                            </tr>
                            <tr>
                                <td>Average Game Length</td>
                                <th>13 minutes</th>
                            </tr>
                            <tr>
                                <td>Favorite Game</td>
                                <th>Uno</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}