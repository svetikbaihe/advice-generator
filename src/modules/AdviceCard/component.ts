import type { AdviceCardInterface } from "./types";
import Card, { type CardInterface } from '@components/Card';
import AdviceAPI, { type AdviceAPIInterface } from '@services/AdviceAPI';
import Button, { type ButtonInterface } from '@elements/Button';

class AdviceCard implements AdviceCardInterface {
  protected card: CardInterface | null = null;
  protected api: AdviceAPIInterface;
  protected id: number = 0;
  protected adviceMessage: string = '';
  protected button: ButtonInterface | null = null;

  constructor() {
    this.api = new AdviceAPI();
    this.button = new Button({ onClick: () => this.handleFetchAdvice() });

    this.card = new Card({
      type: 'filled',
      button: this.button?.buttonElement
    });

    this.handleFetchAdvice();
  }

  public get adviceCardElement() {
    return this.card ? this.card.cardElement : null;
  }

  protected handleFetchAdvice = async () => {
    const data = await this.api.getAdvice();

    this.id = data?.slip.id ?? 0;
    this.adviceMessage = data?.slip.advice ?? '';

    if (this.card) {
      this.card.headline = this.id.toString();
      this.card.supportingText = this.adviceMessage;
    }
  }

}

export default AdviceCard;