import React from 'react';
import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';

// components
// @ts-expect-error ts-migrate(6142) FIXME: Module './StyledText' was resolved to '/Users/moro... Remove this comment to see the full error message
import { SubText } from './StyledText';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Buttons/CountUpButton' was resolved to '... Remove this comment to see the full error message
import { CountUpButton } from './Buttons/CountUpButton';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Buttons/CountDownButton' was resolved to... Remove this comment to see the full error message
import { CountDownButton } from './Buttons/CountDownButton';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Buttons/OrderButton' was resolved to '/U... Remove this comment to see the full error message
import { OrderButton } from './Buttons/OrderButton';

// images
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../images/order-header.png' or... Remove this comment to see the full error message
import OrderHeaderImage from '../images/order-header.png';

const OrderHeader = styled.img`
  width: 100%;
  height: 350px;
`;

const DescriptionWrapper = styled.div`
  padding: 0 8px 8px 8px;
  height: 50px;
`;

const CountersWrapper = styled.div`
  margin-right: auto;
  display: flex;
  padding: 0 16px;
`;

const CountItem = styled.div`
  margin: 0 8px;
`

const CountNum = styled.div`
  padding-top: 10px;
`

const OrderTextWrapper = styled.div`
  display: flex;
`;

const OrderButtonTextWrapper = styled.div`
  width: 300px;
`;

const PriceWrapper = styled.div`
  padding-top: 4px;
`;

export const FoodOrderDialog = ({
  food,
  countNumber,
  isOpen,
  onClose,
  onClickCountUp,
  onClickCountDown,
  onClickOrder
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <OrderHeader src={OrderHeaderImage} alt="order header" />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DialogTitle>
        {food.name}
      </DialogTitle>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DialogContent>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DescriptionWrapper>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SubText>
            {food.description}
          </SubText>
        </DescriptionWrapper>
      </DialogContent>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DialogActions>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CountersWrapper>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <CountItem>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <CountDownButton
              onClick={() => onClickCountDown()}
              // 数量が1以下だったら、カウントダウンさせない
              isDisabled={countNumber <= 1}
            />
          </CountItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <CountItem>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <CountNum>
              {countNumber}
            </CountNum>
          </CountItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <CountItem>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <CountUpButton
              onClick={() => onClickCountUp()}
              // 数量が9以上だったら、カウントアップさせない
              isDisabled={countNumber >= 9}
            />
          </CountItem>
        </CountersWrapper>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <OrderButton onClick={() => onClickOrder()}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <OrderTextWrapper>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <OrderButtonTextWrapper>
              {`${countNumber}点を注文に追加`}
            </OrderButtonTextWrapper>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <PriceWrapper>
              {`¥${countNumber * food.price}`}
            </PriceWrapper>
          </OrderTextWrapper>
        </OrderButton>
      </DialogActions>
    </Dialog>
  )
}
