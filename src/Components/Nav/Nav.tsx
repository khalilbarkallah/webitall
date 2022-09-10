import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { string } from 'yup';

export const Wrapper = styled.div`
  background-color: black;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;
export const Navb = styled.nav`
  padding: 10px;
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
  color: #e6c730;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all ease 0.5s;
  &:hover {
    color: #696969;
  }
`;

export const Linkk = styled.a`
  margin-left: 50px;
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

export const Linkkk = styled.a`
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
    background-color: #222222;
  }
`;

const Nav = () => {
  let user = localStorage.getItem('user-info');
  const history = useNavigate();
  function logout() {
    localStorage.clear();
    history('/');
  }
  return (
    <Wrapper>
      <Navb>
        <List>
          {localStorage.getItem('user-info') ? (
            <>
              <Element>
                <Link href="/">Home</Link>
              </Element>
              <Element>
                <Link href="#">Contact</Link>
              </Element>
              <Element>
                <Link href="/" onClick={logout}>
                  log out
                </Link>
              </Element>
            </>
          ) : (
            <>
              <Element>
                <Link href="/">Home</Link>
              </Element>
              <Element>
                <Link href="#">Contact</Link>
              </Element>
              <Element>
                <Link href="signup">Sign Up</Link>
              </Element>
              <Element>
                <Link href="login">Login</Link>
              </Element>
            </>
          )}
        </List>
      </Navb>
    </Wrapper>
  );
};
export default Nav;
