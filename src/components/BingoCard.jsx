import { useState, useEffect, forwardRef, useImperativeHandle } from "react"
import './Bingo.css'


const BingoCard = forwardRef((props, ref) => {
	const [items, setItems] = useState([])
	const [updateComponent, setUpdateComponent] = useState(0);
	const [bingoShow, setBingoShow] = useState(false)

	useEffect(() => {
		setBingoCard()
	}, [updateComponent])

	useImperativeHandle(ref, () => ({
		newBingoCard() {
			setUpdateComponent(Date.now())
		},
	}))

	const things = [
		{ item: 'Dogge', picUrl: 'dogge.jpg', found: false },
		{ item: 'Premium', found: false },
		{ item: 'falsk mat', found: false },
		{ item: 'norr om gävle', found: false },
		{ item: 'di leva', picUrl: 'di-leva.jpg', found: false },
		{ item: 'hofors', found: false, big: true },
		{ item: 'otroligt', found: false },
		{ item: 'pannben', found: false, rotate2: true },
		{ item: 'något är platt', found: false },
		{ item: 'filma lågt', found: false },
		{ item: 'schulman', picUrl: 'schulman.jpg', found: false },
		{ item: 'netto- resultat', found: false },
		{ item: 'ajvar', found: false, big: true },
		{ item: 'PO säger nåt rikt', found: false },
		{ item: 'sarco', found: false, big: true },
		{ item: '[yrkes]- podden', found: false },
		{ item: 'ruttna hjärnor', found: false },
		{ item: 'har du guld idag?', found: false },
		{ item: 'wikingson', picUrl: 'fredrik-wikingsson.jpg', found: false },
		{ item: 'tennstopet', found: false, rotate: true },
		{ item: 'showen på scala', found: false },
		{ item: 'Klitåååris', found: false, rotate2: true },
		{ item: 'sjöberg', picUrl: 'sjöberg.jpg', found: false },
		{ item: 'piggar upp', found: false },
		{ item: 'barnvecka', found: false, rotate2: true },
		{ item: 'viktor frisk', found: false, picUrl: 'frisk.jpg' },
		{ item: 'glenn hysen', picUrl: 'glenn.jpg', found: false },
		{ item: 'läkare som lyssnar', found: false, rotate2: true },
		{ item: 'uber/über', found: false },
		{ item: 'eftersnacks- gruppen', found: false, rotate: true },
		{ item: 'bobbe nämner döden', found: false },
		{ item: 'det är så gott med mat', found: false },
		{ item: 'kleerup', picUrl: 'kleerup.jpg', found: false },
		{ item: 'po nämner heaton', found: false },
		{ item: 'senaste från väsby', found: false, rotate2: true },
		{ item: 'facebook- grupper', found: false },
		{ item: 'grovt', found: false, big: true },
		{ item: 'joakim lundell', picUrl: 'jocke.jpg', found: false },
		{ item: 'bobbe nämner indiskt', found: false },
		{ item: 'po pratar om det kriminella livet', found: false, rotate2: true },
		{ item: 'melissa horn', found: false, picUrl: 'melissa-horn.jpg' },
		{ item: 'po kräks i munnen', found: false },
		{ item: 'bobbe pratar om flygåren', found: false },
		{ item: 'bobbes alternativa karriärer', found: false, rotate: true },
		{ item: 'låg energi', found: false },
		{ item: 'tunt material', found: false },
		{ item: 'sladdrigt', found: false },
		{ item: 'jackie/ola', picUrl: 'jackie-ola.jpg', found: false },
		{ item: 'nexico', found: false, big: true },
		{ item: 'pärleros', picUrl: 'pärleros.jpg', found: false },
		{ item: 'kaj linna', found: false, picUrl: 'kaj-linna.jpg' }]

	const setBingoCard = () => {
		let bingoCard = []
		for (let i = 0; i < 25; i++) {

			const random = Math.floor(Math.random() * things.length)
			bingoCard.push(things[random])

			things.splice(random, 1)
		}
		setItems(bingoCard)
	}

	const bingo = () => {
		setBingoShow(!bingoShow)
	}

	const whichRow = (pos) => {
		if (pos < 5) {
			return 1
		} else if (pos > 4 && pos < 10) {
			return 2
		} else if (pos > 9 && pos < 15) {
			return 3
		} else if (pos > 14 && pos < 20) {
			return 4
		} else {
			return 5
		}
	}

	const whichCol = (pos) => {
		if (pos === 0 || pos === 5 || pos === 10 || pos === 15 || pos === 20) {
			return 1
		} else if (pos === 1 || pos === 6 || pos === 11 || pos === 16 || pos === 21) {
			return 2
		} else if (pos === 2 || pos === 7 || pos === 12 || pos === 17 || pos === 22) {
			return 3
		} else if (pos === 3 || pos === 8 || pos === 13 || pos === 18 || pos === 23) {
			return 4
		} else {
			return 5
		}
	}




	const setFound = (title) => {
		setItems(items.map(item => {
			if (item.item === title) {
				return { ...item, found: !item.found }
			} else {
				return item
			}
		}))

		const pos = items.map(function (e) { return e.item; }).indexOf(title)

		const row = whichRow(pos)
		let col = whichCol(pos)


		switch (row) {
			case 1: {
				if ((items[pos + 5].found === true && items[pos + 10].found === true && items[pos + 15].found === true && items[pos + 20].found === true)) {
					bingo()
				}
				break;
			}
			case 2: {
				if ((items[pos + 5].found === true && items[pos + 10].found === true && items[pos + 15].found === true && items[pos - 5].found === true)) {
					bingo()
				}
				break;
			}
			case 3: {
				if ((items[pos + 5].found === true && items[pos + 10].found === true && items[pos - 10].found === true && items[pos - 5].found === true)) {
					bingo()
				}
				break;
			}
			case 4: {
				if ((items[pos + 5].found === true && items[pos - 15].found === true && items[pos - 10].found === true && items[pos - 5].found === true)) {
					bingo()
				}
				break;
			}
			case 5: {
				if ((items[pos - 20].found === true && items[pos - 15].found === true && items[pos - 10].found === true && items[pos - 5].found === true)) {
					bingo()
				}
				break;
			}
			default:
				console.log('something went wrong');
		}

		switch (col) {
			case 1: {
				if (items[pos + 1].found === true && items[pos + 2].found === true && items[pos + 3].found === true && items[pos + 4].found === true) {
					bingo()
				}
				break;
			}
			case 2: {
				if (items[pos + 1].found === true && items[pos + 2].found === true && items[pos + 3].found === true && items[pos - 1].found === true) {
					bingo()
				}
				break;
			}
			case 3: {
				if (items[pos + 1].found === true && items[pos + 2].found === true && items[pos - 2].found === true && items[pos - 1].found === true) {
					bingo()
				}
				break;
			}
			case 4: {
				if (items[pos + 1].found === true && items[pos - 3].found === true && items[pos - 2].found === true && items[pos - 1].found === true) {
					bingo()
				}
				break;
			}
			case 5: {
				if (items[pos - 4].found === true && items[pos - 3].found === true && items[pos - 2].found === true && items[pos - 1].found === true) {
					bingo()
				}
				break;
			}
			default:
				console.log('something went wrong');
		}
	}



	return (
		<div className="bingo-card">
			{items.map(item => (
				<div className="bingo-square"
					key={item.item}
					onClick={() => setFound(item.item)}
				>
					{item.found ? <div className={`found ${props.bingoColor}`}></div> : ''}
					{item.picUrl ? <img src={require('../img/' + item.picUrl).default} alt={item.item + ' photo'} />
						:
						<p className={`item ${item.rotate ? 'rotate' : ''} ${item.big ? 'big' : ''} ${item.rotate2 ? 'rotate2' : ''}`}>{item.item}</p>
					}
				</div>
			))
			}
			{bingoShow ? <h2 className={`bingo-text ${props.bingoColor}`} onClick={bingo} >BINGO</h2> : ''}

		</div >
	)
})

export default BingoCard