
import { NavLink } from "react-router-dom";

import './menuburger.css'

function MenuBurger({ items, active, setActive }) {

	active ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";

	return (
		<div className={active ? 'menu active' : 'menu'}>
			<div className="menu-content">
				<ul>
					{items.map((item) => {
						return <li>
							<NavLink to={item.path}>{item.value}</NavLink>
						</li>
					})}
				</ul>
			</div>
		</div>
	);
}


export default MenuBurger;