import { Routes, Route } from "react-router-dom";
import Settings from "../view/Settings/Setting";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Settings}/>
      </Routes>
    </div>
  );
};

export default Router;
