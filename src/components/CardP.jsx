import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const CardP = ({ name, id, population, terrain, gravity }) => {

  const { store, dispatch } = useGlobalReducer()

  function addFavs() {
    console.log(name, id);
    dispatch({ type: 'add_favs', payload: { name: name, id: id } })
  }

  return (<div className="card" style={{ minWidth: "18rem" }}>
    <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
    <div className="card-body h-50 text-wrap my-0 pt-0">
      <div className="h-75 mb-2 py-2 d-flex justify-content-between flex-column">
        <div className="my-0">
        <h5 className="card-title">{name}</h5>

        </div>
        <div className="h-25">

        <p className="card-text">Pupulation: {population}</p>
        </div>
        <div className="h-25">

        <p className="card-text">Tearrain: {terrain}</p>
        </div>
        <div className="h-25 mt-3">
        <p className="card-text">Gravity: {gravity}</p>

        </div>
      </div>

      <div className="container-fluid d-flex justify-content-between px-0 mb-0 pb-0 mt-2">
          <Link to={`/detail/${name}`}>
          <button className="btn btn-primary">Read More</button>
        </Link>
        <button className="btn btn-warning" onClick={addFavs}><i className="fa-duotone fa-regular fa-heart"></i></button>
      </div>
    </div>
  </div>)
}



