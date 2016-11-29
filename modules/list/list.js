import React, { Component } from 'react';

import styles from './list.css';
import ListItem from './item/item.js';

export default class List extends Component {

  render() {
    return (
      <ul className={styles.list}>
        <ListItem/>
        <ListItem/>
      </ul>
    );
  }

};
