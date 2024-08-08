import styles from './styles.module.scss';
import { ContainerInterface } from "./types";
import Button, { type ButtonInterface } from '@elements/Button';

class Container implements ContainerInterface{
  protected $container: HTMLElement | null = null;
  protected button: ButtonInterface | null = null;

  constructor() {

    this.button = new Button({});

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
      'hg-100vh'
      // 'd-flex',
      // 'f-just-content-center',

    ].join(' ');

    if(this.button?.buttonElement) {
      $container?.appendChild(this.button.buttonElement);
    }

    this.$container = $container;
  }
}

export default Container;