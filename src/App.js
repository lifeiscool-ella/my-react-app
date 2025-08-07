import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h2>Subject Component</h2>
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </nav>
    );
  }
} 

class Content extends Component {
  render() {
    return (
      <article>
        <p>This is the content area.</p>
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
       Hello, React!
       <Subject />
       <TOC />
       <Content />
    </div>
  );
  }
}

export default App;
