import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { Button } from './src/components/ButtonRedux';
import { Counter } from './src/components/Counter';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Button />
    </Provider>
  );
}

