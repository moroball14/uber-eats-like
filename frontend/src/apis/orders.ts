import axios from 'axios';
import { orders } from '../urls/index'

interface IOrder {
  line_food_ids: string[]
}

export const postOrder = async (params: IOrder) => {
  return await axios.post(orders,
    {
      line_food_ids: params.line_food_ids
    },
  )
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
