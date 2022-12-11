import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { demoReducer } from '@/pages/Demo/store';

const clientStore = configureStore({
  reducer: { demo: demoReducer.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

const serverStore = configureStore({
  reducer: { demo: demoReducer.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export { clientStore, serverStore };
