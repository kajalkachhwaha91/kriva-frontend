import { Routes, Route } from "react-router-dom";
import Landing from "../pages/public/Landing";


export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    
    </Routes>
  );
}