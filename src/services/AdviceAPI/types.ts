export interface SlipType {
  slip: {
    id: number
    advice: string
  }
}

export interface AdviceAPIInterface {
  getAdvice: () => Promise<SlipType | undefined>
}