export interface SlipType {
  slip_id: number
  advice: string
}

export interface AdviceAPIInterface {
  getAdvice: () => Promise<SlipType | undefined>;
}