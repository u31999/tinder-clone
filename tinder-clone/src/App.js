import './App.css';
import Header from './component/Header';
import SwipeButton from './component/SwipeButton';
import TinderCards from './component/TinderCard';
import { useState, useEffect } from 'react';
import axios from './axios';
function App() {
  const [people, setPeople] = useState([])
  useEffect(()=> {
        async function fetchData() {
            const req = await axios.get('/tinder/cards')

            setPeople(req.data)
        }
        if (people.length === 0) fetchData()
    },[people])
  return (
    <div className="App">
      <Header />
      <TinderCards people={people} />
      <SwipeButton setPeople={setPeople} />
    </div>
  );
}

export default App;
