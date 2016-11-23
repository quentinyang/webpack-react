import styles from './lazyload.css';

import React, { Component } from 'react';

export default class LazyLoad extends Component {

  render() {
    return (
      <div className={ styles.lazyload }>
        <div className={styles.title}>Lazyload</div>
        <p className={ styles.text }>Lazy Load Description</p>
      </div>
    );
  }

};
