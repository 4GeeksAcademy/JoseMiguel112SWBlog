import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getPeople, getPlanets, getVehicles,} from "../services/swServices.js";


//Components
import { Card } from "../components/Card.jsx";
import { CardP } from "../components/CardP.jsx";
import { CardV } from "../components/CardV.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	function favController() {
	
		if (!store.favs || store.favs.length === 0) {
			dispatch({ type: 'initialize_favs', payload: [] })
		}
	}

	useEffect(() => {

		getPeople()
			.then((data) => dispatch({ type: 'update_people', payload: data }))
		getPlanets()
			.then((datap) => dispatch({ type: 'update_planets', payload: datap }))
		getVehicles()
			.then((data) => dispatch({ type: 'update_vehicles', payload: data }))
		
		favController()

	}, [])


	return (
		<>
			<h1 className="m-5">Star Wars</h1>
			<div className="text-start m-5 overflow-x-scroll" style={{ overflowX: "scroll" }}>

				<div className="mw-100 d-flex gap-3 flex-nowrap">
					{store.people?.map((item) => <Card name={item.properties.name} id={item.uid} key={item.uid} gender={item.properties.gender} hair={item.properties.hair_color} eye={item.properties.eye_color} url={item.properties.url}/>)}
				</div>
			</div>
			<h1 className="m-5">Planets</h1>
			<div className="text-start m-5 overflow-x-scroll" style={{ overflowX: "scroll" }}>

				<div className="mw-100 d-flex gap-3 flex-nowrap">
					{store.planets?.map((item) => <CardP name={item.properties.name} id={item.uid} key={item.uid} population={item.properties.population} terrain={item.properties.terrain} gravity={item.properties.gravity} url={item.properties.url}/>)}
				</div>
			</div>

			<h1 className="m-5">Vehicles</h1>
			<div className="text-start m-5 overflow-x-scroll" style={{ overflowX: "scroll" }}>

				<div className="mw-100 d-flex gap-3 flex-nowrap">
					{store.vehicles?.map((item) => <CardV name={item.properties.name} id={item.uid} key={item.uid} model={item.properties.model} vclass={item.properties.vehicle_class} cost={item.properties.cost_in_credits} url={item.properties.url}/>)}
				</div>
			</div>
		</>
	);
}; 