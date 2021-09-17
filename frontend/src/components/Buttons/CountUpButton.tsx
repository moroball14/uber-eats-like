import React from 'react';

// style
import { RoundButton } from '../shared_style';

export const CountUpButton = ({
  onClick,
  isDisabled
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <RoundButton onClick={onClick} disabled={isDisabled}>
    ＋
  </RoundButton>
)
