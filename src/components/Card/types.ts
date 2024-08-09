export interface CardInterface {
  cardElement: HTMLElement | null
}

export interface CardConstructor {
  type: CardType
  headline?: string
  supportingText?: string
  img?: string
  button?: HTMLElement | null
}

export type CardType = 
'elevated' |
'filled' |
'outlined'

