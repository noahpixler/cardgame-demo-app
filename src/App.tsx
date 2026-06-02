import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Games from "./Games";
import Stats from "./Stats";
import Create from "./Create";
import Profile from "./Profile";
export const APP_TITLE = "Cards Tracker";
function App() {

  return (
    <>
      <header className="py-2 text-center">
        <h1 className="mb-2 text-4xl font-bold ">
          {APP_TITLE}
        </h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/stats">Stats</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <hr></hr>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
