import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container  size= {0.3} color="black">
          <p style={{color: 'white'}}> hola que hace </p>
        </Container>
        <Container size={0.6} color="white" />
        <Container size={0.1} color= "black" />
      </div>
    );
  }
}

export default App;
