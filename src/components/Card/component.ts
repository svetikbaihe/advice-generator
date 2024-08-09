import styles from './styles.module.scss';
import { type CardConstructor, CardInterface, CardType } from './types';

class Card implements CardInterface {
  protected headline: string = '';
  protected supportingText: string = '';
  protected img: string = '';
  protected type: CardType = 'filled'
  protected $card: HTMLElement | null = null;
  protected button: HTMLElement | null = null;

  constructor({
    headline,
    supportingText,
    type,
    img,
    button
  }: CardConstructor) {
    this.type = type;

    if(headline) {
      this.headline = headline;
    }

    if(supportingText) {
      this.supportingText = supportingText;
    }

    if(img) {
      this.img = img;
    }

    if (button) {
      this.button = button;
    }

    this.buildCard();
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

    const $supportingText = document.createElement('p');

    $supportingText.className = [
      styles.supporting_text,
      'font-s-14'
    ].join(' ');

    if(this.headline) {
      $headline.innerText = this.headline;
    }

    if(this.supportingText) {
      $supportingText.innerText = this.supportingText;
    }

    $textArea.appendChild($headline);
    $textArea.appendChild($supportingText);

    return $textArea;
  }

  protected buildMediaArea = () => {
    const $mediaArea = document.createElement('div');

    const $divider = document.createElement('img');

    $divider.setAttribute('src', `${this.img}`)

    $mediaArea.appendChild($divider);

    if(this.button) {
      $mediaArea?.appendChild(this.button)
    }

    return $mediaArea;
  }
}

export default Card;