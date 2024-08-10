import styles from './styles.module.scss';
import { type CardConstructor, CardInterface, CardType } from './types';

class Card implements CardInterface {
  protected headlineText: string = '';
  protected supportingMessage: string = '';
  protected img: string = '';
  protected type: CardType = 'filled';
  protected $card: HTMLElement | null = null;
  protected button: HTMLElement | null = null;
  protected $headlineElement: HTMLElement | null = null;
  protected $supportingTextElement: HTMLElement | null = null;

  constructor({
    type,
    img,
    button
  }: CardConstructor) {
    this.type = type;
    this.img = img ?? '';

    if (button) {
      this.button = button;
    }

    this.buildCard();
  }

  public set headline(headline: string) {
    this.headlineText = headline;
    this.updateHeadline(`Advice # ${this.headlineText}`);
  }

  public set supportingText(supportingText: string) {
    this.supportingMessage = supportingText;
    this.updateSupportingText(this.supportingMessage);
  }

  public get cardElement() {
    return this.$card;
  }

  protected buildCard = () => {
    const $card = document.createElement('div');

    $card.className = [
      styles.card,
      styles[`${this.type}`],
      'd-flex',
      'flex-direction-column',
      'gap-17',
      'f-align-items-center',
      'padd-t-23',
      'padd-x-23',
      'padd-b-34',
      'width-272'
    ].join(' ');

    $card.appendChild(this.buildTextArea());
    $card.appendChild(this.buildMediaArea());

    this.$card = $card;
  }

  protected buildTextArea = () => {
    const $textArea = document.createElement('div');

    $textArea.className = [
      styles.text_area,
      'd-flex',
      'flex-direction-column',
      'gap-17'
    ].join(' ');

    const $headline = document.createElement('h1');
    $headline.className = [
      styles.headline,
      'text-primary-neon-green'
    ].join(' ');
    $headline.innerText = this.headline;

    const $supportingText = document.createElement('p');
    $supportingText.className = [
      styles.supporting_text,
      'font-s-14'
    ].join(' ');
    $supportingText.innerText = this.supportingText;

    $textArea.appendChild($headline);
    $textArea.appendChild($supportingText);

    this.$headlineElement = $headline;
    this.$supportingTextElement = $supportingText;

    return $textArea;
  }

  protected buildMediaArea = () => {
    const $mediaArea = document.createElement('div');

    const $divider = document.createElement('img');
    $divider.setAttribute('src', `${this.img}`);

    $mediaArea.appendChild($divider);

    if(this.button) {
      $mediaArea.appendChild(this.button);
    }

    return $mediaArea;
  }

  protected updateHeadline(newHeadline: string) {
    if (this.$headlineElement) {
      this.$headlineElement.innerText = newHeadline;
    }
  }

  protected updateSupportingText(newText: string) {
    if (this.$supportingTextElement) {
      this.$supportingTextElement.innerText = newText;
    }
  }
}


export default Card;