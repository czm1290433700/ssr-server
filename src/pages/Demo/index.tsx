import { useEffect, useState } from "react";
import { ISSRFunction } from "@/utils/type";
import axios from "axios";

interface IProps {
  content?: string;
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

  return <div>{data.content}</div>;
};

Demo.getInitProps = async () => {
  let content = "";
  await axios
    .post("/api/getDemoData", {
      content: "这是一个demo",
    })
    .then((res) => {
      content = res.data?.data?.content || "";
    });
  return { content };
};

export default Demo;
