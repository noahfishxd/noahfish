import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Routes>
        <Route index element={<Main />} />
        <Route path="/Portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;

