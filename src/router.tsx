import Home from "@/pages/Home";
import Demo from "@/pages/Demo";

interface IRouter {
  path: string;
  element: JSX.Element;
  loadData?: () => Promise<any>;
}

const router: Array<IRouter> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Demo />,
    loadData: Demo.getInitProps,
  },
];

export default router;
