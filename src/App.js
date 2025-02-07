import React from 'react';
import './App.css';
import Footer from './componenets/Footer';
import Header from './componenets/Header';
import SelectLevel from './componenets/SelectLevel';

function App() {
  return (
    <div style={{ padding:"20px"}}>
      <Header />
      <SelectLevel />
      <Footer />
    </div>
  );
}

export default App;
