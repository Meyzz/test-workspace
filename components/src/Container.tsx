import React, { FC } from 'react';

import styled from 'styled-components';
import { sum } from './sum';

export const StyledContainer = styled.div`
  background: green;
  width: 50px;
  height: 50px;
`;

export type Props = {
  a: number;
  b: number;
};
export const Container: FC<Props> = props => {
  const { a, b } = props;
  return <StyledContainer>{`sum = ${sum(a, b)}`}</StyledContainer>;
};
