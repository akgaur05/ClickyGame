import React from 'react';

function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav>
			<div className="nav-wrapper container">
				<button style={{cursor: 'pointer'}}className='left' onClick={() => 
					{document.getElementsByClassName('instructionsModal')[0].classList.remove('hide');
				}}>Instructions</button>
				<a href="/" className='brand-logo center'>Remember What You Clicked!</a>
				<ul className='right'>
					<li style={{paddingRight: "20px"}}>Score: {props.score}</li>
					<li style={{paddingLeft: "20px"}}>Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	</div>
	);
}
export default Navbar;