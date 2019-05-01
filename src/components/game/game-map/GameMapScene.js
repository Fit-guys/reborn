import Phaser from 'phaser';
import back2PNG from '../../assets/back2.png';

export default class ExampleScene extends Phaser.Scene {
  preload() {
    this.cameras.main.backgroundColor.setTo(255, 255, 255);
    this.load.image('back2', back2PNG);
  }

  create() {
    const imag = this.add.image(0, 0, 'back2', back2PNG).setOrigin(0, 0).setInteractive();
    imag.scaleX = window.innerWidth / imag.width;
    imag.scaleY = window.innerHeight / imag.height;
    imag.on('pointerdown', () => {
      // eslint-disable-next-line no-console
      console.log('pointerover');
    });
  }

  static update() {
  }

  render() {
    this.preload();
    this.create();
  }
}
