import styles from './autocomplete.css';
import React, { Component } from 'react';
import LazyLoad from '../lazyload/lazyload';

let image = require('./autocomplete.jpg');
export default class AutoComplete extends Component {

  render() {
    return (
      <div className={styles.autocomplete }>
        <div className={styles.title}>AutoComplete</div>
        <p className={ styles.text }>AutoComplete Descrption!</p>
        <div className={styles.content}>This is content.</div>
        <img src={image} />
        <LazyLoad/>
      </div>
    );
  }

};
