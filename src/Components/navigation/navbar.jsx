import { NavLink } from "react-router-dom";



import './navbarstyle.css'
import MenuBurger from "../menub/menuburger";
import { useState } from "react";





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
			value: "Contacts",
			path: "/contacts"
		},
	];
	const [menuActive, setMenuActive] = useState(false);

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
							}} >Home</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to="/robberspage" className={({ isActive }) => {
								return isActive ? activeLink : commonLink;
							}} >Robbers</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to="/contacts" className={({ isActive }) => {
								return isActive ? activeLink : commonLink;
							}}>Contacts</NavLink>
						</li>
					</ul>
				</div>
			</div>

		</nav >

	);
}


export default Navbar;