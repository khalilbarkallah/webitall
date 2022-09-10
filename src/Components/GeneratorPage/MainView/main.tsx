import { SidebarView } from '../SideBar/SidebarView';
import Configuration from '../Configuration/ButtonConfig/ButtonConfig';
import WrapperView from '../Wrapper/Wrapperview';
import NavBar from '../NavBar/Navbar';
import styled from 'styled-components';
import Nav from '../../Nav/Nav';
import NV from '../NavGenerator/GeneratorNav';

function Main() {
  return (
    <>
      <NV />

      <Min>
        <SidebarView />
        <WrapperView />
        <Configuration />
      </Min>
    </>
  );
}
const Min = styled.div`
  background-image: url('./background.jpg');
  background-size: cover;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: 'Raleway', sans-serif; ;
`;

export default Main;
