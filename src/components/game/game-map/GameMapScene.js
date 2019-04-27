import Phaser from 'phaser';
import Num1 from '../../assets/number_1.png';

export default class ExampleScene extends Phaser.Scene {
  preload() {
    this.cameras.main.backgroundColor.setTo(255, 255, 255);
    this.load.image('step1', Num1);
  }

  create() {
    const step1 = this.add.image(300, 400, 'step1');
    step1.scaleX = 0.5;
    step1.scaleY = 0.5;
  }

  static update() {
  }

  render() {
    this.preload();
    this.create();
  }
}
