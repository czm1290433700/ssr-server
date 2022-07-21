import { useEffect, useState, Fragment } from "react";
import { ISSRFunction } from "@/utils/type";
import { connect } from "react-redux";
import axios from "axios";
import { getDemoData } from "./store/demoReducer";
import { Helmet } from "react-helmet";

interface IProps {
  content?: string;
  getDemoData?: (data: string) => void;
}

const Demo: ISSRFunction<IProps> = (data) => {
  // const [content, setContent] = useState("");

  // // 客户端异步请求
  // useEffect(() => {
  //   axios
  //     .post("/api/getDemoData", {
  //       content: "这是一个demo",
  //     })
  //     .then((res) => {
  //       setContent(res.data?.data?.content);
  //     });
  // }, []);

  return (
    <Fragment>
      <Helmet>
        <title>简易的服务器端渲染框架 - DEMO</title>
        <meta name="description" content="服务器端渲染框架"></meta>
      </Helmet>
      <div>
        <h1>{data.content}</h1>
        <button
          onClick={(): void => {
            data.getDemoData && data.getDemoData("刷新过后的数据");
          }}
        >
          刷新
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  // 将对应reducer的内容透传回dom
  return {
    content: state?.demo?.content,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getDemoData: (data: string) => {
      dispatch(getDemoData(data));
    },
  };
};

const storeDemo: any = connect(mapStateToProps, mapDispatchToProps)(Demo);

storeDemo.getInitProps = (store: any, data?: string) => {
  return store.dispatch(getDemoData(data || "这是初始化的demo"));
};

export default storeDemo;
