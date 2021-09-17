import axios from "axios";
import { lineFoods, lineFoodsReplace } from "../urls/index";

interface IFood {
  foodId: string;
  count: number;
}

export const postLineFoods = async (params: IFood) => {
  return await axios
    .post(lineFoods, {
      food_id: params.foodId,
      count: params.count,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const replaceLineFoods = async (params: IFood) => {
  return await axios
    .put(lineFoodsReplace, {
      food_id: params.foodId,
      count: params.count,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const fetchLineFoods = async () => {
  return await axios
    .get(lineFoods)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};
