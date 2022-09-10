import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import FolderPage from './Components/FolderPage/FolderPage';
import Main from './Components/GeneratorPage/MainView/main';
import Protected from './Components/Protected/protected';
import Login from './Components/Login/Login';
import All from './Components/Cmpt/all';
import SignUp from './Components/SignUp/Signup';



const App: React.FC = () => {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          {/*<Route path="/Folder" element={<Protected  cmp={FolderPage}/>} />*/}
          <Route path="/Generator" element={<Main/>} />
          <Route path="/build" element={  <All />}/>
          <Route path="/Folder" element={  <FolderPage />}/>



     
          {/* <Route path="/Form" element={<Form />} /> */}
        </Routes>
       

      </BrowserRouter>
    </div>
  );
}

export default App;
