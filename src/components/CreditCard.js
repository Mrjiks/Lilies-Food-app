import React from 'react';
// import Cards from "react-credit-cards"
//import "react-credit-cards/es/styles-compiled.css"

const CreditCard = () => {
	const [cardInfo, setCardInfo] = useState({
		number: '',
		name: '',
		expiry: '',
		cvc: '',
		focus: '',
	});

	const [cards, setCards] = useState([]);

	const handleCardChange = e => {
		const name = e.target.name;
		const value = e.target.value;

		//!dynamic object keys
		setCardInfo({ ...cardInfo, [name]: value });
	};

	//!Handling form submission
	const handleCardSubmit = e => {
		e.preventDefault();

		if (cardInfo.age && cardInfo.firstName && cardInfo.email) {
			const newCardInfo = { ...cardInfo, id: new Date().getTime().toString() };
			setCards([...cards, newCardInfo]);
			localStorage.setItem('userCard', JSON.stringify(cardInfo));

			setCardInfo({
				number: '',
				name: '',
				expiry: '',
				cvc: '',
				focus: '',
			});
		}
	};
	return (
		<div>
			<form onSubmit={handleCardSubmit}>
				<input
					type='tel'
					name='number'
					placeholder='Card Number'
					value={cardInfo.number}
					onFocus={e => setCardInfo(e.target.name)}
					onChange={handleCardChange}
				/>

				<input
					type='text'
					name='name'
					placeholder='Name'
					value={cardInfo.name}
					onFocus={e => setCardInfo(e.target.name)}
					onChange={handleCardChange}
				/>

				<input
					type='text'
					name='expiry'
					placeholder='MM/YY Expiry'
					value={cardInfo.expiry}
					onFocus={e => setCardInfo(e.target.name)}
					onChange={handleCardChange}
				/>

				<input
					type='tel'
					name='cvc'
					placeholder='CVC'
					value={cardInfo.cvc}
					onFocus={e => setCardInfo(e.target.name)}
					onChange={handleCardChange}
				/>
			</form>
			<Card
				number={number}
				name={name}
				expiry={expiry}
				cvc={cvc}
				focused={focus}
			/>
		</div>
	);
};

export default CreditCard;
