import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const CardP = ({name, id, population, terrain, gravity}) => {

const {store,dispatch}=useGlobalReducer()

    return (<div className="card" style={{minWidth: "18rem"}}>
  <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
  <div className="card-body h-50 text-wrap">
    
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Pupulation: {population}</p>
    <p className="card-text">Tearrain: {terrain}</p>
    <p className="card-text">Gravity: {gravity}</p>
    
    <div className="container-fluid d-flex justify-content-between px-0 mb-0">
    <button className="btn btn-primary">Go somewhere</button>
    <button className="btn btn-warning"><i className="fa-duotone fa-regular fa-heart"></i></button>
    </div>
  </div>
</div>)
}



    