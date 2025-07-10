import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getPeople } from "../services/swServices.js";

//Components
import { Card } from "../components/Card.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {

		getPeople()
			.then((data) => dispatch({ type: "update_people", payload: data }))
		console.log("1");

	}, [])



	return (
		<div className="text-start m-5">
			<h1>Characters</h1>
			<div className="container-fluid d-flex px-3">
				{store.characters.map((item) => <Card name={item.name} id={item.uid} key={item.uid} />)}
			</div>
		</div>
	);
}; 