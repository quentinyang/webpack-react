import React, { Component } from 'react';

import styles from './item.css';

export default class ListItem extends Component {

  render() {
    return (
      <li className={styles.item}>
        This is List Item.
      </li>
    );
  }

};
