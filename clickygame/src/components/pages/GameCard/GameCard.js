import React from 'react';
import './GameCard.css';

function handleClick(props) {
	props.shuffleCards();
	props.clickedCharacter(props.id);
}
function ClickCard(props) {
	return (
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	);
}
export default ClickCard;