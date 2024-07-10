import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate()

	return (
		<>
			<div className="container-bienvenida">
				<div className="titulo-bienvenida">
					<h1>Bienvenido al Mundo de</h1>
					<img className="imagen-titulo" alt="Rick y Morty" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" />
				</div>

				<img
					src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
					className="imagen-bienvenida"
				/>
				<p>Explora el multiverso de Rick y Morty.</p>
				<button type="button" className="boton-bienvenida btn btn-primary" onClick={() => navigate("/inicio")}>Comenzar</button>
			</div>

		</>
	)
};
