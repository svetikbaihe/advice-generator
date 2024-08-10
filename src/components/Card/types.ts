export interface CardInterface {
  supportingText: string
  headline: string
  cardElement: HTMLElement | null
}

export interface CardConstructor {
  type: CardType
  img?: string
  button?: HTMLElement | null
}

export type CardType = 
'elevated' |
'filled' |
'outlined'

