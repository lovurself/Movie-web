import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './routes/Home';
import About from './routes/About'
import Navigation from './components/Navigation';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;