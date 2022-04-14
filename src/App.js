import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './routes/Home';
import Genre from './routes/Genre';
import Ranking from './routes/Ranking';
import SignIn from './routes/SignIn';
import Navigation from './components/Navigation';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;