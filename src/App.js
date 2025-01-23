import './App.css';
import React from 'react';
import Navbar from './componenets/Navbar'
import Body from './componenets/Body';
import Footer from './componenets/Footer';

function App() {
  return (
    <div style={{ padding:"20px"}}>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
