import React from 'react';
import styled from 'styled-components';
import { AiFillFolderAdd } from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';
import { GiPowerGenerator } from 'react-icons/gi';
import { TiExportOutline } from 'react-icons/ti';
import { BsDoorClosed } from 'react-icons/bs';

export const Wrapper = styled.div`
  background-color: #9698ed;
`;
export const Navb = styled.nav``;

export const List = styled.ul`
  list-style-type: none;
  gap: 2rem;
  margin-left: -20px;
`;
export const Element = styled.li`
  list-style: none;
  display: inline-block;
  padding: 10px;
`;

export const Btn = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  width: 200px;
  font-size: 17px;
  padding-bottom: 30px;
  margin-top: 3%;
`;
export const Titre = styled.div`
  font-size: 27px;
  display: inline-block;
  float: left;
  padding-left: 40px;
  padding-top: 10px;
  color: #14163c;
`;

const Nav = () => {
  return (
    <Wrapper>
      <Navb>
        <List>
          <Titre>
            {' '}
            <h1>WebItAll</h1>
          </Titre>
          <Element>
            <Btn>
              <FiSave size="2em" color="white" /> Save{' '}
            </Btn>
          </Element>
          <Element>
            <Btn>
              <AiFillFolderAdd size="2em" color="white" /> New file{' '}
            </Btn>
          </Element>{' '}
          <Element>
            <Btn>
              <GiPowerGenerator size="2em" color="white" /> Generate{' '}
            </Btn>
          </Element>
          <Element>
            <Btn>
              <TiExportOutline size="2em" color="white" /> Export{' '}
            </Btn>
          </Element>
          <Element>
            <Btn>
              <BsDoorClosed size="2em" color="white" /> Close{' '}
            </Btn>
          </Element>
        </List>
      </Navb>
    </Wrapper>
  );
};
export default Nav;
