import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DetailCard = props => {
  const { store, dispatch } = useGlobalReducer();
  const [foundItem, setFoundItem] = useState(null);

  useEffect(() => {
    let result = null;
    const name = props.item;
    
    console.log("Searching for item:", name);
    console.log("Store contents:", store.people);
    // Buscar en people
    if (store.people) {
      for (let i = 0; i < store.people.length; i++) {
        if (store.people[i].properties.name === name) {
          result = store.people[i];
          break;
        }
      }
    }
    // Buscar en planets si no se encontró en people
    if (!result && store.planets) {
      for (let i = 0; i < store.planets.length; i++) {
        if (store.planets[i].properties.name === name) {
          result = store.planets[i];
          break;
        }
      }
    }
    // Buscar en vehicles si no se encontró en planets
    if (!result && store.vehicles) {
      for (let i = 0; i < store.vehicles.length; i++) {
        if (store.vehicles[i].properties.name === name) {
          result = store.vehicles[i];
          break;
        }
      }
    }
    setFoundItem(result);
    console.log("Found item:", result);
    
  }, [props.item, store.people, store.planets, store.vehicles]);

  return (
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://placehold.co/600x400" className="img-fluid" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{foundItem?.properties.name}</h5>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
};