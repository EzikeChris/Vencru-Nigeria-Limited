// Route File
import { Routes, Route } from "react-router";
import Settings from "../view/setting";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Router;
