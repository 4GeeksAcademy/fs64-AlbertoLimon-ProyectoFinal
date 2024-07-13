import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../styles/navbar.css";
import { MdOutlineSettings } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light mb-4">
				<div className="container">
					<div className="navbar-brand fs-3">
						<img className="imagenPerfil" src="https://cdn11.bigcommerce.com/s-fg272t4iw0/images/stencil/1280x1280/products/7093/7346/C-17141__68476.1557818587.jpg?c=2" />
						<span className="">My Profile</span>
					</div>
					<div className="dropdown">
						<a className="btn btn-transparent dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">

						</a>

						<ul className="dropdown-menu">
							<Link to="/profile">
								<li><a className="dropdown-item" href="#"><MdOutlineSettings /> Settings</a></li>
							</Link>


							<li><hr className="dropdown-divider" /></li>
							<li><a className="dropdown-item" href="#"><LuLogOut /> Logout</a></li>
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
						<div className="navbar-nav fs-5">
							<NavLink to="/main" className="nav-link">
								Characters
							</NavLink>
							<NavLink to="/episodes" className="nav-link">
								Episodes
							</NavLink>
							<NavLink
								className="nav-link"
								to="/location"
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
