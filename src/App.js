import './App.css';

import BingoCard from './components/BingoCard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <BingoCard />
      </header>
    </div>
  );
}

export default App;
