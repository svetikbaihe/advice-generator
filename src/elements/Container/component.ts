import styles from './styles.module.scss';
import type { ContainerInterface, ContainerConstructor } from "./types";

class Container implements ContainerInterface {
  protected $container: HTMLElement | null = null;
  protected $element: HTMLElement | null = null;

  constructor({element}: ContainerConstructor) {
    if(element) {
      this.$element = element
    }

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

    if (this.$element) {
      $container?.appendChild(this.$element);
    }

    this.$container = $container;
  }
}

export default Container;
