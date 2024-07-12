import React, { Component } from "react";
import "../../styles/footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { LuPartyPopper } from "react-icons/lu";

export const Footer = () => {
	return (
		<>
			<div className="b-example-divider"></div>
			<div className="container" id="contenedor-footer">
				<footer className="d-flex flex-column justify-content-center ">
					<div className="row border-bottom border-secondary pb-5">
						<div className="col-4 centrado">
							<h5>Quick Links</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2"><a href="">Privacy Policy</a></li>
								<li className="nav-item mb-2"><a href="">Terms and Conditions</a></li>
							</ul>
						</div>
						<div className="col-4 centrado">
							<h5>Contact Us</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2 d-flex flex-row justify-content-center align-items-center ">
									<BiLogoGmail />
									<a className="ps-2" href="">albertolimoncarmona99@gmail.com</a>
								</li>
								<li className="nav-item mb-2">+34 640967587</li>
							</ul>
						</div>

						<div className="col-4 centrado">
							<h5>Follow</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2"><a href="www.linkedin.com/in/alberto-limón-carmona-34660420b" target="_blank"><FaLinkedin /></a> </li>
								<li className="nav-item mb-2"><a href="https://github.com/albertolimongithub" target="_blank"><FaGithub /></a>  </li>
							</ul>
						</div>


					</div>

					<div className="d-flex flex-colum justify-content-around pb-4">
						<span className="footer-txt">Copyright C 2024. All rights reserved.</span>
						<div className="d-flex flex-colum justify-content-center align-items-center">
							<span className="footer-txt">Enjoy!  <LuPartyPopper /></span>
						</div>
						
					</div>
					
				</footer>
			</div>
		</>
	)

};
