import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import router from '@/router';
import { clientStore } from '@/store';
import { Provider } from 'react-redux';
import React from 'react';

const Client = (): JSX.Element => (
  <Provider store={clientStore}>
    <BrowserRouter>
      <Routes>
        {router?.map((item, index) => (
          <Route {...item} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  </Provider>
);

// 将事件处理加到ID为root的dom下
hydrateRoot(document.getElementById('root') as Document | Element, <Client />);
