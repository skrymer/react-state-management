import React, { CSSProperties } from 'react';
import './App.css';
import UseState from './components/UseState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UseReducer from './components/UseReducer';

export const fullScreenStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: 'auto'
}

export const generateRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/use-state" component={UseState} exact />
          <Route path="/use-reducer" component={UseReducer} exact />
        </Switch>
      </BrowserRouter>
      <ul>
        <li onClick={() => window.location.href = '/use-state'}>use state</li>
        <li onClick={() => window.location.href = '/use-reducer'}>use reducer</li>
        <li onClick={() => window.location.href = '/redux'}>redux</li>
        <li onClick={() => window.location.href = '/recoil'}>recoil</li>
      </ul>
    </div>
  );
}

export default App;
