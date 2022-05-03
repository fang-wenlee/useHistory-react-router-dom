import "./styles.css";

// import PreTask from "./component/pretask";
import ControlTask from "./component/controlParent";
import Patch from "./component/patch";
import PostTask from "./component/posttask";
import Nav from "./component/nav";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/controltask" element={<ControlTask />} />
        <Route path="/patch" element={<Patch />} />
        <Route path="/posttask" element={<PostTask />} />
      </Routes>
    </div>
  );
}
