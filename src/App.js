import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './routes/Home';
import Genre from './routes/Genre';
import Ranking from './routes/Ranking';
import SignIn from './routes/SignIn';
import Navigation from './components/Navigation';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #171717;
  }
`;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <GlobalStyle />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;