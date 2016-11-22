import styles from './autocomplete.css';

import React, { Component } from 'react';

import LazyLoad from '../lazyload/lazyload';

export default class AutoComplete extends Component {

  render() {
    return (
      <div className={ styles.root }>
        <div className={styles.title}>AutoComplete</div>
        <p className={ styles.text }>AutoComplete Descrption</p>
        <div className={styles.content}>This is content.</div>
        <LazyLoad />
      </div>
    );
  }

};
