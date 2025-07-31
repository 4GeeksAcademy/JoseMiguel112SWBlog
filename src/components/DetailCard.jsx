import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const DetailCard = props =>(
    <div className="card mb-3" style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.properties.description}</p>
        
      </div>
    </div>
  </div>
</div>
);