import styles from './styles.module.scss';
import { ContainerInterface } from "./types";
import Button, { type ButtonInterface } from '@elements/Button';
import Card, { type CardInterface } from '@components/Card';

class Container implements ContainerInterface{
  protected $container: HTMLElement | null = null;
  protected button: ButtonInterface | null = null;
  protected card: CardInterface | null = null;

  constructor() {

    this.button = new Button({});
    this.card = new Card({
      headline: 'Advice # 177',
      supportingText: '"It is with using, you can directly call myfunction without needing to."',
      type: 'filled',
      img: 'src/assets/svg/pattern-divider-desktop.svg'
    });

    this.buildContainer();
  }

  public get containerElement() {
    return this.$container;
  }

  protected buildContainer = () => {
    const $container = document.createElement('div');

    $container.className = [
      styles.container,
      'bg-color-neutral-dark-blue',
      'hg-100vh',
      'd-flex',
      'f-just-content-center',
      'f-align-items-center'
    ].join(' ');

    if(this.card?.cardElement) {
      $container?.appendChild(this.card?.cardElement);
    }

    this.$container = $container;
  }
}

export default Container;