import React from 'react';

// style
import { RoundButton } from '../shared_style';

export const CountUpButton = ({
  onClick,
  isDisabled
}: {onClick: React.MouseEventHandler<HTMLButtonElement>; isDisabled: boolean}) => (
  <RoundButton onClick={onClick} disabled={isDisabled}>
    ＋
  </RoundButton>
)
