import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <Routes>
        <Route index element={<Main />} />
    </Routes>
  );
}

export default App;

