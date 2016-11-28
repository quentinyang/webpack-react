import styles from './lazyload.css';

import React, { Component } from 'react';

let image = require("./loading.gif");
let image2 = require('./loading.png');

// let image = require("url-loader?limit=10000!./loading.gif");

export default class LazyLoad extends Component {

  render() {
    return (
      <div className={ styles.lazyload }>
        <div className={styles.title}>Lazyload</div>
        <img src={image}/>
        <p className={ styles.text }>Lazy Load Description</p>
        <img src={image2}/>
      </div>
    );
  }

};
