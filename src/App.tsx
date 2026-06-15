import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Games from "./Games";
import Stats from "./Stats";
import Create from "./Create";
import Profile from "./Profile";
import Play from "./Play";
import GameStats from "./GameStats";
import Setup from "./Setup";

export const APP_TITLE = "Cards Tracker";

function App() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu absolute bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/stats">Stats</Link></li>
              <li><Link to="/create">Create</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            {APP_TITLE}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal w-full">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/stats">Stats</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/play" element={<Play />} />
        <Route path="/stats/:gameId" element={<GameStats />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </>
  );
}

export default App;