import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, NavLink } from "react-router-dom";
import "../../../styles/navbar.css";
import { MdOutlineSettings } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";


export const Navbar = () => {

	const { store, actions } = useContext(Context);
	
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">
					<div className="navbar-brand">
						<img className="imagenPerfil" src="https://i.pinimg.com/originals/ec/3e/3d/ec3e3d06ff9aaacd229c7c288308340e.png" />
						<span className="">My Profile</span>
					</div>
					<div className="dropdown">
						<a className="btn btn-transparent dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">

						</a>
 
						<ul className="dropdown-menu">
							<Link to="/profile">
								<li><a className="dropdown-item" href="#"><MdOutlineSettings /> Account Details</a></li>
							</Link>
							<Link to="/main/favorites">
								<li><a className="dropdown-item" href="#"><MdFavoriteBorder /> My Favorites</a></li>
							</Link>


							<li><hr className="dropdown-divider" /></li>
							<li onClick={() => actions.logout()}><a className="dropdown-item"><LuLogOut /> Logout</a></li>
						</ul>
					</div>

					<button
						className="navbar-toggler border-0"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>

					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup"
					>
						<div className="navbar-nav">
							<NavLink to="/main/characters" className="item-nav nav-link fs-2">
								Characters
							</NavLink>
							<NavLink to="/main/episodes" className="item-nav nav-link fs-2">
								Episodes
							</NavLink>
							<NavLink
								className="item-nav nav-link fs-2"
								to="/main/locations"
							>
								Locations
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</>

	);
};
