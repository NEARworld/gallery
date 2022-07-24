import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

import { CardContext } from './utils/CardContext';

function App() {
  const [cards, setCards] = useState(0);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </CardContext.Provider>
  );
}

export default App;
