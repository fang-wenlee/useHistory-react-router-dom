import "./styles.css";

import PreTask from "./component/pretask";
import Patch from "./component/patch";
import PostTask from "./component/posttask";
import Nav from "./component/nav";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/pretask" component={PreTask} />
        <Route path="/patch" component={Patch} />
        <Route path="/posttask" component={PostTask} />
      </Routes>
    </div>
  );
}
