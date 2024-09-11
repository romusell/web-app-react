
import { useEffect } from 'react';
import './App.css';
import './telegram-web-app.js';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(()=>{
     tg.ready(); 
  },[]);

  const onClose =() =>{
    tg.close();
 }
 
  return (
    <div className="App">
        work
        <button onClick={onClose}>Зачинити</button>
    </div>
  );
}

export default App;
