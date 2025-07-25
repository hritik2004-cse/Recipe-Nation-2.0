import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import { HeroSec} from './HeroSec/HeroSec';
import { Categories } from './Categories/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSec />
      <Categories />
    </div>
  );
}

export default App;
