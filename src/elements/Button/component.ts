import styles from './styles.module.scss';
import type { ButtonConstructor, ButtonInterface } from "./types";

class Button implements ButtonInterface {
  protected handleClick: VoidFunction = () => {};
  protected $button: HTMLElement | null = null;

  constructor ({ onClick }: ButtonConstructor) {
    if (onClick) {
      this.handleClick = onClick
    }

    this.buildButton();
  }

  public get buttonElement() {
    return this.$button;
  }

  protected buildButton = () => {
    const $button = document.createElement('button');

    $button.className = [
      styles.button,
      'padd-10',
      'bg-color-primary-neon-green'
    ].join(' ');

    $button.addEventListener('click', () => this.handleClick());

    const $buttonIcon = document.createElement('img');

    $buttonIcon.setAttribute('src', 'icon-dice.svg');

    $button.appendChild($buttonIcon);

    this.$button = $button;
  }
}

export default Button;