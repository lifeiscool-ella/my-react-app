import React, { Component } from 'react';

class TOC extends Component {
  render() {
    var data = this.props.data;
    var i= 0;
    var lists = [];
    while(i < data.length) {
      lists.push(
        <li key={data[i].id}>
          {data[i].title}
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
} 

export default TOC;