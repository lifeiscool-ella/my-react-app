import React, { Component } from 'react';   

class Subject extends Component {
  render() {
    return (
      <header>
        <h2><a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage('welcome');
        }.bind(this)}>{this.props.title}</a></h2>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;