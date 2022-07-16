import ReactDom from "react-dom";
import Home from "../pages/Home";

// 将事件处理加到ID为root的dom下
ReactDom.hydrate(<Home />, document.getElementById("root"));
