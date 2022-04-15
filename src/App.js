import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MonthTodo from "./pages/MonthTodo";
import TodayTodo from "./pages/TodayTodo";
import WeekTodo from "./pages/WeekTodo";
import YearTodo from "./pages/YearTodo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/today" element={<TodayTodo />} />
      <Route path="/week" element={<WeekTodo />} />
      <Route path="/month" element={<MonthTodo />} />
      <Route path="/year" element={<YearTodo />} />
    </Routes>
  );
}

export default App;
