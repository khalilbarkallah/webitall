import React from 'react';

import styled from 'styled-components';

export const Text = styled.div`
  width: 50%;
  padding-right: 20px;
`;
export const Parg = styled.p`
  padding-top: 200px;
  font-size: 20px;
  line-height: 46px;
  color: black;
`;
export const Span = styled.span`
  color: ;
  font-size: 30px;
`;
export const Linka = styled.a`
  display: inline-block;
  width: 150px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  text-align: center;
  font-size: 18px;
  border-radius: 50px;
  &:hover {
    background-color: #615c59;
  }
`;

export const Img = styled.div`
  background-image: url('../../../public/herobackground.webp');
  background-size: cover;

  color: #f5f5f5;
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 100%;
  top: 0;
`;

const Hero = () => {
  return (
    <Img>
      <Text>
        <Parg>
          {' '}
          <h1>Build Your Interfaces</h1>
        </Parg>
      </Text>
    </Img>
  );
};

export default Hero;
