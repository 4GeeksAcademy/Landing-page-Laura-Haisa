import React from 'react';
import PropType from "prop-types";


export const Card = props =>  {
    return (
        <div className="card mb-sm-3 mb-md-3 mb-lg-3">
			<img
				className="card-img-top"
				src={props.urlImage}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.cardText}</p>
					<a
						href={props.buttonUrl}
						className="btn btn-primary">
						{props.buttonLabel}
					</a>
			</div>
		</div>	

	);
};

Card.propTypes = {
	urlImage: PropType.string,
	cardTitle: PropType.string,
	cardText: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
};

