import { NavLink } from "react-router-dom";

//КОМЕНТАРИЙ

import './navbarstyle.css'
import MenuBurger from "../menub/menuburger";
import { useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next"



function Navbar() {

	const activeLink = "nav-list__link nav-list__link-active";
	const commonLink = "nav-list__link";
	const menuItems = [
		{
			value: "Home",
			path: "/"
		},
		{
			value: "Robbers",
			path: "/robberspage"
		},
		{
			value: "About",
			path: "/about"
		},
	];
	const [menuActive, setMenuActive] = useState(false);

	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo"><strong>
						Robbers</strong> portal
					</NavLink>

					<div className="burger-button" onClick={() => {
						setMenuActive(!menuActive);
					}}>
						<span />
					</div>
					<MenuBurger active={menuActive} setActive={setMenuActive} items={menuItems} />

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink to="/" className={({ isActive }) => {
								return isActive ? activeLink : commonLink;
							}} >{t("Home")}</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to="/robberspage" className={({ isActive }) => {
								return isActive ? activeLink : commonLink;
							}} >{t("Robbers")}</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to="/about" className={({ isActive }) => {
								return isActive ? activeLink : commonLink;
							}}>{t("About")}</NavLink>
						</li>
						<li className="nav-list__item">
							<button type="button" class="btn btn-outline-light" onClick={() => changeLanguage("ru")}>RU</button>
						</li>
						<li className="nav-list__item">
							<button type="button" class="btn btn-outline-light" onClick={() => changeLanguage("en")}>EN</button>
						</li>
					</ul>

				</div>
			</div>

		</nav >

	);
}


export default Navbar;