import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacter } from "../services/swServices.js";


export const Card = ({name, id, gender, hair, eye}) => {

const {store,dispatch}=useGlobalReducer()

function addFavs(){
  console.log(name,id);
  dispatch({type:'add_favs', payload:{name:name, id:id}})
}



    return (<div className="card" style={{minWidth: "18rem"}}>
  <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Gender: {gender}</p>
    <p className="card-text">Hair color: {hair}</p>
    <p className="card-text">Eye color: {eye}</p>
    <div className="container-fluid d-flex justify-content-between px-0">
      <Link to="/detail">
        <button className="btn btn-primary">Read More</button>
      </Link>
    
    <button className="btn btn-warning" onClick={addFavs}><i className="fa-duotone fa-regular fa-heart"></i></button>
    </div>
  </div>
</div>)
}



    
