import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <article>
        <p>{this.props.title}</p>
        {this.props.desc}
      </article>
    );
  }
}

export default Content;
