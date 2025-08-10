import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


export const DetailCard = props =>(
    <div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://placehold.co/600x400" className="img-fluid" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <p className="card-text"></p>
        
      </div>
    </div>
  </div>
</div>
);