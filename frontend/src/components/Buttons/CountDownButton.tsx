import React from 'react';

// style
import { RoundButton } from '../shared_style';

export const CountDownButton = ({
  onClick,
  isDisabled
}: {onClick: React.MouseEventHandler<HTMLButtonElement>; isDisabled: boolean}) => (
  <RoundButton onClick={onClick} disabled={isDisabled}>
    ー
  </RoundButton>
)
