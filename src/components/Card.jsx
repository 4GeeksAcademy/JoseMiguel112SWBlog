import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Card = ({name, id}) => {

const {store,dispatch}=useGlobalReducer()

    return (<div className="card" style={{minWidth: "18rem"}}>
  <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Gender: </p>
    <p className="card-text">Hair color: </p>
    <p className="card-text">Eye color: </p>
    <div className="container fluid">
    <button className="btn btn-primary">Go somewhere</button>
    <button className="btn btn-warning">hate</button>
    </div>
  </div>
</div>)
}



    
