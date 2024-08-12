import React, { Component } from "react";
import "../../../styles/footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { LuPartyPopper } from "react-icons/lu";
import { FaLemon } from "react-icons/fa";

export const Footer = () => {
	return (
		<>
			
			<div className="container" id="contenedor-footer">
				<footer className="d-flex flex-column justify-content-center ">
					<div className="row border-bottom border-secondary ">
						<div className="col-4 centrado">
							<h5 className="font-monospace letra-negrita">Quick Links</h5>
							<ul className="nav flex-column">
								<li className="nav-item mt-2 mb-2 font-monospace"><a href="https://rickandmortyapi.com/" target="_blank">Rick & Morty API</a></li>
							</ul>
						</div>
						<div className="col-4 centrado">
							<h5 className="font-monospace letra-negrita">Contact Us</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2 d-flex flex-row justify-content-center align-items-center ">
									<BiLogoGmail />
									<span className="span-gmail font-monospace" href="">albertolimoncarmona99@gmail.com</span>
								</li>
							</ul>
						</div>

						<div className="col-4 centrado">
							<h5 className="font-monospace letra-negrita">Follow</h5>
							<ul className="nav flex-row gap-3">
								<li className="nav-item mb-2"><a href="https://www.linkedin.com/in/alberto-limón-carmona-34660420b" target="_blank"><FaLinkedin /></a> </li>
								<li className="nav-item mb-2"><a href="https://github.com/albertolimongithub" target="_blank"><FaGithub /></a>  </li>
							</ul>
						</div>


					</div>

					<div className="d-flex flex-colum align-items-center justify-content-around pb-3">
						<span className="footer-txt font-monospace">Copyright C 2024. All rights reserved.</span>
						<div className="d-flex flex-colum justify-content-center align-items-center">
							<span className="footer-txt font-monospace">Made by Alberto Limón  <FaLemon />. Enjoy!  <LuPartyPopper /></span>
						</div>
						
					</div>
					
				</footer>
			</div>
		</>
	)

};
