

export const Card = (props) => {



    return (<div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Gender: {props.gender}</p>
    <p className="card-text">Hair color: {props.hair_color}</p>
    <p className="card-text">Eye color: {props.eye_color}</p>
    <div className="container fluid">
    <button className="btn btn-primary">Go somewhere</button>
    <button className="btn btn-warning">hate</button>
    </div>
  </div>
</div>)
}



    
