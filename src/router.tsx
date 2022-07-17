import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Demo from "@/pages/Demo";

const Router = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
