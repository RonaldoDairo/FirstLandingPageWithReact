import React from "react";
import NavBar from "./navBar.jsx";
import Content from "./content.jsx";
import Card from "./card.jsx";
import Inferior from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar></NavBar>
			<Content></Content>
			<Card></Card>
			<Inferior></Inferior>
			
		</div>
	);
};

export default Home;
