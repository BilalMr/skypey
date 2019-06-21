import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import store from './store';
import _ from 'lodash'

const {contacts} = store.getState()

function App() {
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>
      <Main/>
    </div>
  );
}

export default App;
