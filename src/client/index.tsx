import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "@/router";

const Client = (): JSX.Element => {
  return <BrowserRouter>{Router()}</BrowserRouter>;
};

// 将事件处理加到ID为root的dom下
ReactDom.hydrate(<Client />, document.getElementById("root"));
