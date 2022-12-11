import React from 'react';
import Home from '@/pages/Home';
import Demo from '@/pages/Demo';

interface IRouter {
  path: string;
  element: JSX.Element;
  loadData?: (store: any) => any;
}

const router: Array<IRouter> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/demo',
    element: <Demo />,
    loadData: Demo.getInitProps,
  },
];

export default router;
