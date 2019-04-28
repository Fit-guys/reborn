import React, { Component } from 'react';
import Phaser from 'phaser';
import ExampleScene from './GameMapScene';

const WINDOW_WIDTH = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
const WINDOW_HEIGHT = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

export default class GameMap extends Component {
  componentDidMount() {
    const config = {
      type: Phaser.AUTO,
      parent: 'phaser-example',
      width: WINDOW_WIDTH,
      height: WINDOW_HEIGHT,
      scene: [ExampleScene],
    };
    /* eslint-disable no-new */
    new Phaser.Game(config);
  }

  render() {
    return (
      <div id="phaser-game" />
    );
  }
}
