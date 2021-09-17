import axios from 'axios';
import { foodsIndex } from '../urls/index'

export const fetchFoods = async (restaurantId: any) => {
  return await axios.get(foodsIndex(restaurantId))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
