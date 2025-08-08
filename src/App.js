import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3; 
    this.state = {
      mode:'create',
      selected_content_id: 2,
      subject:{title: 'WEB', sub: 'world wide web!'},
      welcome:{title: 'Welcome', desc: 'Hello, React!'},
      contents:[
        {id: 1, title: 'HTML', desc: 'HTML is HyperText Markup Language.'},
        {id: 2, title: 'CSS', desc: 'CSS is Cascading Style Sheets.'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is a programming language.'} 
      ]
    };
  } 

  render() {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if(this.state.mode === 'create') {
        _article = <CreateContent onSubmit={function(_title, _desc) {
          this.max_content_id = this.max_content_id + 1;
          // this.state.contents.push({
          //   id: this.max_content_id,
          //   title: _title,
          //   desc: _desc
          // });
          var _contensts = this.state.contents.concat({
            id: this.max_content_id,
            title: _title,
            desc: _desc
          });
          this.setState({
            contents: _contensts
          });
        }.bind(this)} />;
    } else if(this.state.mode === 'update') {
      var content = this.state.contents.find(content => content.id === this.state.selected_content_id);
      if (content) {
        _title = content.title;
        _desc = content.desc;
        _article = <CreateContent title={_title} desc={_desc} />;
      } else {
        _title = 'Content Not Found';
      }
    } 
    return (
      <div className="App">
       Hello, React!
       <Subject title={this.state.subject.title} sub={this.state.subject.sub} 
       onChangePage={function(page){
         this.setState({
           mode: page
         });
       }.bind(this)}/>
       {/* <header>
         <h1><a href="/" onClick={function(e){
           e.preventDefault();
           this.setState({mode:'welcome'});
         }.bind(this)}>{this.state.subject.title}</a></h1>
         <p>{this.state.subject.sub}</p>
       </header> */}
       {/* <Subject title="React" sub="For UI" /> */}
       <TOC onChangePage={function(id){
         this.setState({
           mode: 'read',
           selected_content_id: Number(id)
         });
       }.bind(this)} contents={this.state.contents} />
       <ReadContent title={_title} desc={_desc}/>
    </div>
  );
  }
}

export default App;
