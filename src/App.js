import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './Redux/Store';
import Cakecontainer from './Components/Cakecontainer';
import './App.css';
import { HooksCakeContainer } from './Components/HooksCakeContainer';

const App = () => {
  return (
    <Provider store={store}> {/* Wrap your components with Provider and pass the store */}
      <div className='app'>
        <Cakecontainer />
        <HooksCakeContainer/>
      </div>
    </Provider>
  );
};

export default App;

