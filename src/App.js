import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import Contact from "./components/routes/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
