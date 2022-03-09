import { Route, Routes } from "react-router-dom"
import { Repo } from "./views/Repo"
import { Repos } from "./views/Repos"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Repos />} />
        <Route path="/repo/*" element={<Repo />} />
      </Routes>
    </div>
  )
}

export default App
