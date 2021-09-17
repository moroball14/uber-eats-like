import React, { Fragment, useEffect, useReducer, useState } from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
import { COLORS } from "../style_constants";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useHistory, Link } from "react-router-dom";

// components
import { LocalMallIcon } from "../components/Icons";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/FoodWrapper' was resolved to... Remove this comment to see the full error message
import { FoodWrapper } from "../components/FoodWrapper";
import Skeleton from "@material-ui/lab/Skeleton";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/FoodOrderDialog' was resolve... Remove this comment to see the full error message
import { FoodOrderDialog } from "../components/FoodOrderDialog";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/NewOrderConfirmDialog' was r... Remove this comment to see the full error message
import { NewOrderConfirmDialog } from "../components/NewOrderConfirmDialog";

// reducers
import {
  initialState as foodsInitialState,
  foodsActionTyps,
  foodsReducer,
} from "../reducers/foods";

// apis
import { fetchFoods } from "../apis/foods";
import { postLineFoods, replaceLineFoods } from "../apis/line_foods";

// images
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../images/logo.png' or its cor... Remove this comment to see the full error message
import MainLogo from "../images/logo.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../images/food-image.jpg' or i... Remove this comment to see the full error message
import FoodImage from "../images/food-image.jpg";

// constants
import { REQUEST_STATE } from "../constants";
import { HTTP_STATUS_CODE } from "../constants";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
`;

const BagIconWrapper = styled.div`
  padding-top: 24px;
`;

const ColoredBagIcon = styled(LocalMallIcon)`
  color: ${COLORS.MAIN};
`;

const MainLogoImage = styled.img`
  height: 90px;
`;

const FoodsList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const ItemWrapper = styled.div`
  margin: 16px;
`;

// const submitOrder = () => {
//   // 後ほど仮注文のAPIを実装します
//   console.log('登録ボタンが押された！')
// }

export const Foods = ({
  match
}: any) => {
  const history = useHistory();
  const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState);
  const initialState = {
    isOpenOrderDialog: false,
    selectedFood: null,
    selectedFoodCount: 1,
    isOpenNewOrderDialog: false,
    existingResutaurautName: "",
    newResutaurautName: "",
  };
  const [state, setState] = useState(initialState);

  const submitOrder = () => {
    postLineFoods({
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      foodId: state.selectedFood.id,
      count: state.selectedFoodCount,
    })
      .then(() => history.push("/orders"))
      .catch((e) => {
        if (e.response.status === HTTP_STATUS_CODE.NOT_ACCEPTABLE) {
          setState({
            ...state,
            isOpenOrderDialog: false,
            isOpenNewOrderDialog: true,
            existingResutaurautName: e.response.data.existing_restaurant,
            newResutaurautName: e.response.data.new_restaurant,
          });
        } else {
          throw e;
        }
      });
  };

  const replaceOrder = () => {
    replaceLineFoods({
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      foodId: state.selectedFood.id,
      count: state.selectedFoodCount,
    }).then(() => history.push("/orders"));
  };

  useEffect(() => {
    dispatch({ type: foodsActionTyps.FETCHING });
    fetchFoods(match.params.restaurantsId).then((data) => {
      dispatch({
        type: foodsActionTyps.FETCH_SUCCESS,
        payload: {
          foods: data.foods,
        },
      });
    });
  }, [match.params.restaurantsId]);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <HeaderWrapper>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Link to="/restaurants">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MainLogoImage src={MainLogo} alt="main logo" />
        </Link>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <BagIconWrapper>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Link to="/orders">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ColoredBagIcon fontSize="large" />
          </Link>
        </BagIconWrapper>
      </HeaderWrapper>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FoodsList>
        {foodsState.fetchState === REQUEST_STATE.LOADING ? (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Fragment>
            {/* @ts-expect-error ts-migrate(2569) FIXME: Type 'IterableIterator<number>' is not an array ty... Remove this comment to see the full error message */}
            {[...Array(12).keys()].map((i) => (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ItemWrapper key={i}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Skeleton key={i} variant="rect" width={450} height={180} />
              </ItemWrapper>
            ))}
          </Fragment>
        ) : (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          foodsState.foodsList.map((food: any) => <ItemWrapper key={food.id}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <FoodWrapper
              food={food}
              onClickFoodWrapper={(food: any) => setState({
                ...state,
                isOpenOrderDialog: true,
                selectedFood: food,
              })
              }
              imageUrl={FoodImage}
            />
          </ItemWrapper>)
        )}
      </FoodsList>
      {state.isOpenOrderDialog && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FoodOrderDialog
          isOpen={state.isOpenOrderDialog}
          food={state.selectedFood}
          countNumber={state.selectedFoodCount}
          onClickCountUp={() =>
            setState({
              ...state,
              selectedFoodCount: state.selectedFoodCount + 1,
            })
          }
          onClickCountDown={() =>
            setState({
              ...state,
              selectedFoodCount: state.selectedFoodCount - 1,
            })
          }
          // 先ほど作った関数を渡します
          onClickOrder={() => submitOrder()}
          // モーダルを閉じる時はすべてのstateを初期化する
          onClose={() =>
            setState({
              ...state,
              isOpenOrderDialog: false,
              selectedFood: null,
              selectedFoodCount: 1,
            })
          }
        />
      )}
      {state.isOpenNewOrderDialog && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NewOrderConfirmDialog
          isOpen={state.isOpenNewOrderDialog}
          onClose={() => setState({ ...state, isOpenNewOrderDialog: false })}
          existingResutaurautName={state.existingResutaurautName}
          newResutaurautName={state.newResutaurautName}
          onClickSubmit={() => replaceOrder()}
        />
      )}
    </Fragment>
  );
};
