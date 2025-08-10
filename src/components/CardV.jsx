import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacter } from "../services/swServices.js";


export const CardV = ({name, id, model, vclass, cost}) => {

const {store,dispatch}=useGlobalReducer()

function addFavs(){
  console.log(name,id);
  dispatch({type:'add_favs', payload:{name:name, id:id}})
}

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  }
  return str;
}


   return (<div className="card" style={{ minWidth: "18rem" }}>
    <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
    <div className="card-body h-50 text-wrap my-0 pt-0">
      <div className="h-75 mb-2 py-2 d-flex justify-content-between flex-column">
        <div className="my-0">
        <h5 className="card-title">{name}</h5>

        </div>
        <div className="h-25">

        <p className="card-text">Model: {truncateString(model, 20)}</p>
        </div>
        <div className="h-25">

        <p className="card-text">Class: {vclass}</p>
        </div>
        <div className="h-25 mb-0">
        <p className="card-text">Cost: {cost}</p>

        </div>
      </div>

      <div className="container-fluid d-flex justify-content-between px-0 mb-0 pb-0 mt-2">
        <button className="btn btn-primary">Read More</button>
        <button className="btn btn-warning" onClick={addFavs}><i className="fa-duotone fa-regular fa-heart"></i></button>
      </div>
    </div>
  </div>)
}