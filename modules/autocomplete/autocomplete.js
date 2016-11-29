import styles from './autocomplete.css';
import React, { Component } from 'react';
import LazyLoad from '../lazyload/lazyload';

let image = require('./autocomplete.jpg');
export default class AutoComplete extends Component {

  render() {
    return (
      <div className={styles.autocomplete }>
        <div className={styles.title}>AutoComplete</div>
        <p>File@<code>modules/autocomplete/autocomplete.js</code></p>
        <div className={styles.content}>
          <span className={styles.text}>This is content.</span>
          <input type="text" className={styles.text} />
        </div>
        <img src={image} />
      </div>
    );
  }

};
