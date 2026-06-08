import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Games from "./Games";
import Stats from "./Stats";
import Create from "./Create";
import Profile from "./Profile";
import Play from "./Play";

export const APP_TITLE = "Cards Tracker";

function App() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
            <details className="dropdown lg:hidden">
              <summary className="btn btn-ghost">
                ☰
              </summary>

              <ul className="menu dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/stats">Stats</Link></li>
                <li><Link to="/create">Create</Link></li>
                <li><Link to="/profile">Profile</Link></li>
              </ul>
            </details>
            <Link to="/" className="btn btn-ghost text-xl">
              {APP_TITLE}
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex w-full">
            <ul className="flex w-full justify-evenly">
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
        </Routes>
      </>
      );
    }
      export default App;