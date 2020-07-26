import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Do you love me.
          </p>
          <a
            className="App-link"            
            target="_blank"
            rel="noopener noreferrer"
            onClick = { this.props.onClick }
          >
            Like
          </a>
          <p>
            Count: {this.props.count}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
