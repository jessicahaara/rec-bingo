import './Settings.css'
import { useState } from 'react';

const Settings = ({ setBackgroundColor, setBingoColor, newBingoCard }) => {
	const [showSettings, setShowSettings] = useState(false)

	const handleBgChange = (color) => {
		setBackgroundColor(color)
	}

	const handleBingoChange = (color) => {
		setBingoColor(color)
	}

	const show = () => {
		setShowSettings(!showSettings)
	}



	return (
		<section className="settings">
			{showSettings ? <section className="settings-section">
				<select className="bg-select" onChange={(event) => handleBgChange(event.target.value)}>
					<option value="" disabled selected>Välj brickfärg</option>
					<option value="dark">Mörk</option>
					<option value="light">Ljus</option>
					<option value="purple">Lila</option>
					<option value="yellow">Gul</option>
					<option value="green">Grön</option>
					<option value="blue">Blå</option>
				</select>

				<select className="bingo-select" onChange={(event) => handleBingoChange(event.target.value)}>
					<option value="" disabled selected>Välj bingofärg</option>
					<option value="redbingo">Röd</option>
					<option value="bluebingo">Blå</option>
					<option value="greenbingo">Grön</option>
					<option value="pinkbingo">Rosa</option>
				</select>

				<button onClick={newBingoCard}>
					Slumpa fram ny bingobricka!
				</button>
			</section>
				:
				<section></section>
			}


			{!showSettings ?
				<p className="fa cog" onClick={show}>
					&#xf013;
				</p>
				:
				<p onClick={show} className="close">X</p>}

		</section>
	)
}

export default Settings