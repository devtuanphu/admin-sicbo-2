import "./App.css";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
