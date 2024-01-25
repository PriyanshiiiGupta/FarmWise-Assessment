// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddFields from './components/AddFields';
import DisplayFields from './components/DisplayFields';
import DynamicDisplayScreen from './components/DynamicDataCollection';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddFields />
        <DisplayFields />
        <DynamicDisplayScreen/>
      </div>
    </Provider>
  ); 
}

export default App;
