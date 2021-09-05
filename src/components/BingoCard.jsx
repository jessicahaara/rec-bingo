// import { useState } from "react"
import './Bingo.css'

const BingoCard = () => {
	// const [bingos, setBingos] = useState([])

	const things = ['Dogge',
		'Premium',
		'falsk mat',
		'norr om gävle',
		'di leva',
		'hofors',
		'otroligt',
		'pannben',
		'nåt är platt',
		'filma lågt',
		'schulman',
		'netto- resultat',
		'ajvar',
		'PO säger nåt rikt',
		'sarco',
		'[yrkes]- podden',
		'ruttna hjärnor',
		'har du guld idag?',
		'wikingson',
		'tennstopet',
		'showen på scala',
		'Klitåååris',
		'sjöberg',
		'piggar upp',
		'barnvecka',
		'viktor frisk',
		'glenn hysen',
		'läkare som lyssnar',
		'uber/über',
		'nåt om eftersnacks- gruppen',
		'bobbe nämner döden',
		'det är så gott med mat',
		'kleerup',
		'po nämner heaton',
		'senaste från väsby',
		'matgrupper',
		'grovt',
		'joakim lundell',
		'bobbe nämner indiskt',
		'po pratar om det ljuva kriminella livet',
		'melissa horn',
		'po kräks i munnen',
		'nåt om flygåren',
		'bobbes alternativa karriärer',
		'låg energi/tunt material',
		'sladdrigt',
		'jackie/ola',
		'nexico',
		'pärleros',
		'kaj linna']

		const bingoCard = []
	const setBingoCard = () => {
		for (let i = 0; i < 25; i++) {

			const random = Math.floor(Math.random() * (things.length - 1))
			bingoCard.push(things[random])
			things.splice(random, 1)
		}
		// setBingos(bingoCard)
	}

	setBingoCard()

	return (
		<div className="bingo-card">
			{bingoCard.map(item => (
				<div className="bingo-square" key={item}>
					<p>{item}</p>
				</div>
			))}

		</div>
	)
}

export default BingoCard