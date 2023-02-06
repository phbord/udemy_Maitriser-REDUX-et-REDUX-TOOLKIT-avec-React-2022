import { BUY_TV } from './type'

export const buyTv = (totalTv) => {
  return {
    type: BUY_TV,
    payload: totalTv,
  }
}