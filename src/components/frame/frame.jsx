import React from 'react'
import morning from '../../assets/morning.jpeg'
import night from '../../assets/night.jpeg'
import './frame.scss'

function Frame(props) {
	return (
		<div className="frame">
			<>
				{props.day ? (
					<img
						src={morning}
						className="frame-img"
						style={{ maxWidth: '100vw' }}
						alt="morning"
					/>
				) : (
					<img
						src={night}
						className="frame-img"
						style={{ maxWidth: '100vw' }}
						alt="night"
					/>
				)}
			</>
		</div>
	)
}

export default Frame
