import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';

// components
// @ts-expect-error ts-migrate(6142) FIXME: Module './StyledText' was resolved to '/Users/moro... Remove this comment to see the full error message
import { SubText } from './StyledText';

// constants
import { COLORS } from '../style_constants';

const Wrapper = styled.div`
  display: flex;
  width: 450px;
  height: 180px;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.BORDER};
  border-image: initial;
  cursor: pointer;
`;

const FoodDetail = styled.div`
  padding: 24px 16px;
  width: 250px;
`;

const DescriptionWrapper = styled.div`
  height: 75px;
`

const PriceWrapper = styled.div`
  margin-top: 16px;
`

const FoodImageNode = styled.img`
  width: 250px;
`;

export const FoodWrapper = ({
  food,
  onClickFoodWrapper,
  imageUrl
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Wrapper onClick={() => onClickFoodWrapper(food)}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <FoodDetail>
      {food.name}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DescriptionWrapper>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SubText>
          {food.description}
        </SubText>
      </DescriptionWrapper>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PriceWrapper>
        ¥{food.price}
      </PriceWrapper>
    </FoodDetail>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <FoodImageNode src={imageUrl} />
  </Wrapper>
)
