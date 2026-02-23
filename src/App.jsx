import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./pages/public/Landing";
// import Login from "./pages/public/Login";
// import Dashboard from "./pages/protected/Dashboard";

import ProtectedRoutes from "./routes/ProtectedRoutes";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory dark:bg-royalBlack text-black dark:text-white">
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
         

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}