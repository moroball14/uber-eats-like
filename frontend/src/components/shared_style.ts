// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';

// constants
import { COLORS } from '../style_constants';

// ボタンの元となるコンポーネント
export const BaseButton = styled.button`
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  :focus {
    outline: 0;
  }
`;

// 角丸なボタン
// BaseButtonを継承していることに注意
export const RoundButton = styled(BaseButton)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background-color: ${COLORS.SUB_BUTTON};
`;
