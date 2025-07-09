import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

//Components
import { Card } from "../components/Card.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	function getPeople() {
		fetch('https://www.swapi.tech/api/people/', { method: "GET" })
			.then((response) => {
				
				console.log(response);
				
				if (response.status === 402) {
					createAgenda();
				}
				else return response.json()
			})
			.then((data) => {
				setContacts(data.contacts)
			console.log(data.contacts)
			})
			
			.catch((error) => console.log(error))
	}

	

	return (
		<div className="text-start m-5">
			<h1>Characters</h1>
			<div className="container-fluid d-flex px-3">

			</div>
		</div>
	);
}; 