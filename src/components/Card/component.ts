import type { CardConstructor, CardInterface, CardType } from './types';
import styles from './styles.module.scss';

class Card implements CardInterface {
  protected headlineText: string = '';
  protected supportingMessage: string = '';
  protected type: CardType = 'filled';
  protected $card: HTMLElement | null = null;
  protected button: HTMLElement | null = null;
  protected $headlineElement: HTMLElement | null = null;
  protected $supportingTextElement: HTMLElement | null = null;

  constructor({
    type,
    button
  }: CardConstructor) {
    this.type = type;

    if (button) {
      this.button = button;
    }

    this.buildCard();
  }

  public set headline(headline: string) {
    this.headlineText = headline;
    this.updateHeadline(`Advice #${this.headlineText}`);
  }

  public set supportingText(supportingText: string) {
    this.supportingMessage = supportingText;
    this.updateSupportingText(`“${this.supportingMessage}”`);
  }

  public get cardElement() {
    return this.$card;
  }

  protected buildCard = () => {
    const $card = document.createElement('div');

    $card.className = [
      styles.card,
      styles[`${this.type}`]
    ].join(' ');

    $card.appendChild(this.buildTextArea());
    $card.appendChild(this.buildMediaArea());

    this.$card = $card;
  }

  protected buildTextArea = () => {
    const $textArea = document.createElement('div');

    $textArea.className = styles['text_area']

    const $headline = document.createElement('h1');

    $headline.className = styles['headline']

    $headline.innerText = this.headlineText;

    const $supportingText = document.createElement('p');

    $supportingText.className = styles['supporting_text'];

    $supportingText.innerText = this.supportingMessage;

    $textArea.appendChild($headline);
    $textArea.appendChild($supportingText);

    this.$headlineElement = $headline;
    this.$supportingTextElement = $supportingText;

    return $textArea;
  }

  protected buildMediaArea = () => {
    const $mediaArea = document.createElement('div');

    $mediaArea.className = styles['media_area'];

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