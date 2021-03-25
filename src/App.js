import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.development';

class App extends Component {
  render() {
  return (
    <div className="gray-background">
        <img src={logo} lat="logo"/>
        <h2>Let's aqs management system!</h2>
    </div>
  );
  }
}

export default App;
