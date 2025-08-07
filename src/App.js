import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{title: 'WEB', sub: 'world wide web!'},
      contents:[
        {id: 1, title: 'HTML', desc: 'HTML is HyperText Markup Language.'},
        {id: 2, title: 'CSS', desc: 'CSS is Cascading Style Sheets.'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is a programming language.'} 
      ]
    };
  } 

  render() {
    return (
      <div className="App">
       Hello, React!
       <Subject title={this.state.subject.title} sub={this.state.subject.sub} />
       <Subject title="React" sub="For UI" />
       <TOC contents={this.state.contents} />
       <Content title="HTML" desc="HTML is HyperText Markup Language."/>
    </div>
  );
  }
}

export default App;
