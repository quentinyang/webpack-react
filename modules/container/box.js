import styles from './box.css';

import React, { Component } from 'react';

export default class Box extends Component {

  render() {
    return (
      <div className={ styles.box }>
        {this.props.children}
      </div>
    );
  }

};
