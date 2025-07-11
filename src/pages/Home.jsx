import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getPeople, getPlanets} from "../services/swServices.js";


//Components
import { Card } from "../components/Card.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {

		getPeople()
			.then((data) => dispatch({ type: 'update_people', payload: data }))
		getPlanets()
			.then((datap) => dispatch({type: 'update_planets', payload: datap}))

	}, [])

// {store.people.map(character => {
// 					return (
// 						<Cards key={character.uid} character={character} />
// 					)
// 				})}

	return (
		<>
<h1 className="m-5">Characters</h1>
		<div className="text-start m-5 overflow-x-scroll" style={{overflowX:"scroll"}}>
			
			<div className="mw-100 d-flex gap-3 flex-nowrap">
				{store.characters?.map((item) => <Card name={item.name} id={item.uid} key={item.uid} />)}
			</div>
		</div>
		<h1 className="m-5">Characters</h1>
		<div className="text-start m-5 overflow-x-scroll" style={{overflowX:"scroll"}}>
			
			<div className="mw-100 d-flex gap-3 flex-nowrap">
				{store.planets?.map((item) => <Card name={item.name} id={item.uid} key={item.uid} />)}
			</div>
		</div>
		</>
	);
}; 