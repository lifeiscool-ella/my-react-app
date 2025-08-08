import React, { Component } from 'react';

class ReadContent extends Component {
  render() {
    return (
      <article>
        <p>{this.props.title}</p>
        {this.props.desc}
      </article>
    );
  }
}

export default ReadContent;
