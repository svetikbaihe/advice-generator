import styles from './styles.module.scss';
import { ContainerInterface } from "./types";
import Card, { type CardInterface } from '@components/Card';
import AdviceAPI, { type AdviceAPIInterface } from '@services/AdviceAPI';

class Container implements ContainerInterface{
  protected $container: HTMLElement | null = null;
  protected card: CardInterface | null = null;
  protected api: AdviceAPIInterface;
  protected id: number = 0;
  protected adviceMessage: string = '';

  constructor() {

    this.api = new AdviceAPI();

    this.buildContainer();
    this.handleFetchAdvice();
  }

  public get containerElement() {
    return this.$container;
  }

  protected handleFetchAdvice = async () => {
    const data = await this.api.getAdvice();
    
    this.id = data?.slip.id ?? 0
    this.adviceMessage = data?.slip.advice ?? ''

    this.card = new Card({
      headline: `Advice # ${this.id}`,
      supportingText: `${this.adviceMessage}`,
      type: 'filled',
      img: 'src/assets/svg/pattern-divider-desktop.svg'
    });

    if(this.card?.cardElement) {
      this.$container?.appendChild(this.card?.cardElement);
    }
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

    this.$container = $container;
  }
}

export default Container;