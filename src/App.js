import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <Provider store={store}>
      <div className='App-header'>
        <Router>
          <Route exact path='/' component={Landing} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
