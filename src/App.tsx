import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
export const APP_TITLE = "Cards Tracker";
function App() {

  return (
    <>
      <header className="py-2 text-center">
        <h1 className="mb-2 text-4xl font-bold ">
          {APP_TITLE}
        </h1>
        <hr></hr>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
