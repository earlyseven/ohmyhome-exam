import React from 'react'

const Card = ({
	img,
	title,
	text,
	buttons
}) => (
	<div className="card mb-3">
		<img 
			className="card-img-top" 
			src={img.src} 
			alt={img.alt} 
		/>
		<div className="card-body">
			<h5 className="card-title">{title}</h5>
			<p className="card-text">
				{text}
			</p>
			<hr />
			<div className="text-right">
				{buttons}
			</div>
		</div>
	</div>
)

export default Card