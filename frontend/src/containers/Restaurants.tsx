import React, { Fragment, useReducer, useEffect } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from "react-router-dom";

// components
import Skeleton from '@material-ui/lab/Skeleton';

// apis
import { fetchRestaurants } from '../apis/restaurants';

// reducers
import {
  initialState,
  restaurantsActionTyps,
  restaurantsReducer,
} from '../reducers/restaurants';

// constants
import { REQUEST_STATE } from '../constants';

// images
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../images/logo.png' or its cor... Remove this comment to see the full error message
import MainLogo from '../images/logo.png';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../images/main-cover-image.png... Remove this comment to see the full error message
import MainCoverImage from '../images/main-cover-image.png';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../images/restaurant-image.jpg... Remove this comment to see the full error message
import RestaurantImage from '../images/restaurant-image.jpg';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 90px;
`

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 600px;
`;

const RestaurantsContentsList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
`;

const RestaurantsContentWrapper = styled.div`
  width: 450px;
  height: 300px;
  padding: 48px;
`;

const RestaurantsImageNode = styled.img`
  width: 100%;
`;

const MainText = styled.p`
  color: black;
  font-size: 18px;
`;

const SubText = styled.p`
  color: black;
  font-size: 12px;
`;

export const Restaurants = () => {
  const [state, dispatch] = useReducer(restaurantsReducer, initialState);

  useEffect(() => {
    dispatch({ type: restaurantsActionTyps.FETCHING });
    fetchRestaurants()
    .then((data) =>
      dispatch({
        type: restaurantsActionTyps.FETCH_SUCCESS,
        payload: {
          restaurants: data.restaurants
        }
      })
    )
  }, [])

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <HeaderWrapper>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <MainCoverImageWrapper>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <RestaurantsContentsList>
        {
          state.fetchState === REQUEST_STATE.LOADING ?
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Fragment>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Skeleton variant="rect" width={450} height={300} />
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Skeleton variant="rect" width={450} height={300} />
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Skeleton variant="rect" width={450} height={300} />
            </Fragment>
          :
            state.restaurantsList.map((item: any, index: any) =>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Link to={`/restaurants/${item.id}/foods`} key={index} style={{ textDecoration: 'none' }}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <RestaurantsContentWrapper>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <RestaurantsImageNode src={RestaurantImage} />
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <MainText>{item.name}</MainText>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <SubText>{`配送料：${item.fee}円 ${item.time_required}分`}</SubText>
                </RestaurantsContentWrapper>
              </Link>
            )
        }
      </RestaurantsContentsList>
    </Fragment>
  );
}
