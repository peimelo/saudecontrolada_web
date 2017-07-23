export interface Dashboard {
  weights: Weight[]
}

export interface Weight {
  date: string,
  height: number,
  id: number,
  value: number
}
