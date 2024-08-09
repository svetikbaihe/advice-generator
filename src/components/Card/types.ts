export interface CardInterface {
  cardElement: HTMLElement | null
}

export interface CardConstructor {
  type: CardType
  headline?: string
  supportingText?: string
  img?: string
}

export type CardType = 
'elevated' |
'filled' |
'outlined'

