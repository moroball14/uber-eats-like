import React, { Fragment, useEffect, useReducer } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from "react-router-dom";

// components
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/OrderDetailItem' was resolve... Remove this comment to see the full error message
import { OrderDetailItem } from '../components/OrderDetailItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/Buttons/OrderButton' was res... Remove this comment to see the full error message
import { OrderButton } from '../components/Buttons/OrderButton';
import CircularProgress from '@material-ui/core/CircularProgress';

// apis
import { fetchLineFoods } from '../apis/line_foods';
import { postOrder } from '../apis/orders';

// reducers
import {
  initialState,
  lineFoodsActionTyps,
  lineFoodsReducer,
} from '../reducers/lineFoods';

// images
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../images/logo.png' or its cor... Remove this comment to see the full error message
import MainLogo from '../images/logo.png';

// constants
import { REQUEST_STATE } from '../constants';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 90px;
`;

const OrderListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const OrderItemWrapper = styled.div`
  margin-bottom: 50px;
`;

export const Orders = () => {
  const [state, dispatch] = useReducer(lineFoodsReducer, initialState);

  useEffect(() => {
    dispatch({ type: lineFoodsActionTyps.FETCHING });
    fetchLineFoods()
      .then((data) =>
        dispatch({
          type: lineFoodsActionTyps.FETCH_SUCCESS,
          payload: {
            lineFoodsSummary: data
          }
        })
      )
      .catch((e) => console.error(e));
  }, []);

  const postLineFoods = () => {
    dispatch({ type: lineFoodsActionTyps.POSTING });
    postOrder({
      line_food_ids: state.lineFoodsSummary.line_food_ids,
    }).then(() => {
      dispatch({ type: lineFoodsActionTyps.POST_SUCCESS });
    });
    window.location.reload();
  };

  const orderButtonLabel = () => {
    switch (state.postState) {
      case REQUEST_STATE.LOADING:
        return '注文中...';
      case REQUEST_STATE.OK:
        return '注文が完了しました！';
      default:
        return '注文を確定する';
    }
  };

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
      </HeaderWrapper>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <OrderListWrapper>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <OrderItemWrapper>
              {
                // APIローディング中はくるくる回るローディングコンポーネントを表示
                state.fetchState === REQUEST_STATE.LOADING ?
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <CircularProgress />
                :
                  state.lineFoodsSummary &&
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <OrderDetailItem
                      restaurantFee={state.lineFoodsSummary.restaurant.fee}
                      restaurantName={state.lineFoodsSummary.restaurant.name}
                      restaurantId={state.lineFoodsSummary.restaurant.id}
                      timeRequired={state.lineFoodsSummary.restaurant.time_required}
                      foodCount={state.lineFoodsSummary.count}
                      price={state.lineFoodsSummary.amount}
                    />
              }
            </OrderItemWrapper>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div>
            {
              state.fetchState === REQUEST_STATE.OK && state.lineFoodsSummary &&
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <OrderButton
                  onClick={() => postLineFoods()}
                  disabled={state.postState === REQUEST_STATE.LOADING || state.postState === REQUEST_STATE.OK}
                >
                  {orderButtonLabel()}
                </OrderButton>
            }
            {
              state.fetchState === REQUEST_STATE.OK && !(state.lineFoodsSummary) &&
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <p>
                  注文予定の商品はありません。
                </p>
            }
          </div>
        </div>
      </OrderListWrapper>
    </Fragment>
  )
}
