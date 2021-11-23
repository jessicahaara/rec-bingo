import './App.css';
import BingoCard from './components/BingoCard';
import Header from './components/Header';
import Settings from './components/Settings';
import { useState, useRef } from 'react';

function App() {
	const bingoCompRef = useRef()
	const [backgroundColorClass, setBackgroundColorClass] = useState('dark');
	const [bingoColorClass, setBingoColorClass] = useState('redbingo');

	const setBackgroundColor = (color) => {
		setBackgroundColorClass(color)
	}

	const setBingoColor = (color) => {
		setBingoColorClass(color)
	}

	const newBingoCard = () => {
		bingoCompRef.current.newBingoCard()
	}

	return (
		<div className={`App ${backgroundColorClass}`}>
			<header className="App-header">
				<Header />
				<BingoCard bingoColor={bingoColorClass} ref={bingoCompRef} />
				<Settings setBackgroundColor={setBackgroundColor} setBingoColor={setBingoColor} newBingoCard={newBingoCard} />
			</header>
		</div>
	);
}

export default App;
