import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
   
    position: relative;
    overflow: hidden;
    z-index:1
      border-style: solid;
   border-color: rgb(11, 26, 232);


 `;
export const Navb = styled.nav`
  padding: 20px 10px;
`;

export const List = styled.ul`

  
    padding-left 150px;

  
    overflow-x: auto;
`;
export const Element = styled.li`
  list-style: none;
  display: inline-block;
  margin: 0 15px;
`;

export const Link = styled.a`
  margin: 10px;
  color: #aba9b4;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all ease 0.5s;
  &:hover {
    color: #696969;
  }
`;

export const Linkk = styled.a`
  display: inline-block;
  width: 90px;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  color: #ffddf;
  text-align: center;
  font-size: 18px;
  border-radius: 4px;
  white-space: nowrap;
  transition: all ease 0.5s;
  &:hover {
    background-color: #615c59;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Navb>
        <List>
          <Element>
            <Linkk href="">Save</Linkk>
          </Element>
          <Element>
            <Linkk href="">Delete</Linkk>
          </Element>
        </List>
      </Navb>
    </Wrapper>
  );
};
export default NavBar;
