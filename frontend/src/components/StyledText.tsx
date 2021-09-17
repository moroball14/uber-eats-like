// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import { COLORS, FONT_SIZE } from '../style_constants';

export const SubText = styled.p`
  color: ${COLORS.SUB_TEXT};
  font-size: ${FONT_SIZE.BODY2};
`;
