import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/demo">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				<div className="ml-auto">

					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Read Later List
						</button>
						<ul className="dropdown-menu">

							{store.favs?.map((item) => 
							<li>
								<Link to="/detail">{item.name}</Link>
								<i className="fa-solid fa-trash"></i>
							</li>)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};