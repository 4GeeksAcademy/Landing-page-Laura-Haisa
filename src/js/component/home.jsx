import React from "react";

import {Card} from "./card.jsx"


//create your first component
const Home = () => {
	return (

	<div>
	 <div className="container-fluid w-75">
		<div className="row">
			<div className="col-xl-3 col-md-4 col-lg-3 mb-2">
				<Card
					urlImage="https://picsum.photos/id/40/367/267"
					cardTitle="Card Title"
					cardText="Card Text"
					buttonLink="https://my.clevelandclinic.org/health/body/21778-nose"
					buttonLabel="Learn more"
				/>
			</div>
			<div className="col-xl-3 col-md-4 col-lg-3 mb-2">
				<Card
					urlImage="https://picsum.photos/id/40/367/267"
					cardTitle="Card Title"
					cardText="Card Text"
					buttonLink="https://my.clevelandclinic.org/health/body/21778-nose"
						buttonLabel="Learn more"
				/>
			</div>
			<div className="col-xl-3 col-md-4 col-lg-3 mb-2">
				<Card
					urlImage="https://picsum.photos/id/40/367/267"
					cardTitle="Card Title"
					cardText="Card Text"
					buttonLink="https://my.clevelandclinic.org/health/body/21778-nose"
					buttonLabel="Learn more"
				/>
			</div>
			<div className="col-xl-3 col-md-4 col-lg-3 mb-2">
				<Card
					urlImage="https://picsum.photos/id/40/367/267"
					cardTitle="Card Title"
					cardText="Card Text"
					buttonLink="https://my.clevelandclinic.org/health/body/21778-nose"
					buttonLabel="Learn more"
				/>
			</div>
		</div>
	</div>	
	
		<footer className="row bg-dark"> 
		  <p className="text-center text-white pt-5 pb-5">copyright, website with react 2023</p>

	    </footer>

	</div>

	

	);
};

export default Home;
