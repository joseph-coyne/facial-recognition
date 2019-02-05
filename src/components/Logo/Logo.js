import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
			<div className="Tilt-inner"> 
				<img style={{ paddingTop: '20px' }} src="https://img.icons8.com/nolan/64/000000/face-id.png" alt="logo"/>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;