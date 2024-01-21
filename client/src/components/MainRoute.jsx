import { Routes, Route } from "react-router-dom";

import Authentication from "./UserAutheticate";
// import Banner from "../pages/Banner"
import { Capsule } from "./Capsules";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
      <Route path="/spacex" element={<Capsule />} />
    </Routes>
  );
};
