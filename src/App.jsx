import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Goals from "./views/Goals";
import MainCore from "./views/MainCore";
import Stats from "./views/Stats";
import DisplayGoal from "./views/DisplayGoal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/maincore" element={<MainCore />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/displaygoal" element={<DisplayGoal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
