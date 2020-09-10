import styled from 'styled-components';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const Container = styled.div`
    background: lightgray;
    width: 50px;
    height: 50px;
    `;