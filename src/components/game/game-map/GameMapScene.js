import Phaser from 'phaser';
import Num1 from '../../assets/num1.png';
import Num2 from '../../assets/num2.png';
import Num3 from '../../assets/num3.png';
import Num4 from '../../assets/num4.png';
import Num5 from '../../assets/num5.png';
import Num1Act from '../../assets/num1act.png';

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

export default class ExampleScene extends Phaser.Scene {
  preload() {
    this.cameras.main.backgroundColor.setTo(255, 255, 255);
    this.load.image('step1', Num1);
    this.load.image('step2', Num2);
    this.load.image('step3', Num3);
    this.load.image('step4', Num4);
    this.load.image('step5', Num5);
    this.load.image('step1act', Num1Act);
  }

  create() {
    const step1 = this.add.image(WINDOW_WIDTH / 6, WINDOW_HEIGHT / 1.5, 'step1');
    step1.scaleX = 0.4;
    step1.scaleY = 0.4;
    step1.setInteractive({ useHandCursor: true });
    step1.on('pointerup', () => {
      // eslint-disable-next-line no-console
      const text = this.add.text(WINDOW_WIDTH / (6 * 2.5), WINDOW_HEIGHT / 4.5, ' Екран вітання й опису програми і правил її використання. \n Сутність спеціальності, ії перспективність, престиижність. \n Які знання отримає студент, якщо він буде навчатись цієї спеціальності. \n Можливі варіанти працевлаштування.', {
        backgroundColor: 'white',
        color: 'blue',
        fontSize: 48,
      });
      text.setInteractive({ useHandCursor: true });
      text.scaleX = 0.6;
      text.scaleY = 0.6;
    });
    const step2 = this.add.image(WINDOW_WIDTH / (6 * 0.5), WINDOW_HEIGHT / 1.5, 'step2');
    step2.scaleX = 0.4;
    step2.scaleY = 0.4;
    const step3 = this.add.image(WINDOW_WIDTH / (6 * 0.333), WINDOW_HEIGHT / 1.5, 'step3');
    step3.scaleX = 0.4;
    step3.scaleY = 0.4;
    const step4 = this.add.image(WINDOW_WIDTH / (6 * 0.25), WINDOW_HEIGHT / 1.5, 'step4');
    step4.scaleX = 0.4;
    step4.scaleY = 0.4;
    const step5 = this.add.image(WINDOW_WIDTH / (6 * 0.2), WINDOW_HEIGHT / 1.5, 'step5');
    step5.scaleX = 0.4;
    step5.scaleY = 0.4;
  }

  static actionOnClick() {
    // eslint-disable-next-line no-console
    console.log('hi');
  }

  static update() {

  }

  render() {
    this.preload();
    this.create();
  }
}
