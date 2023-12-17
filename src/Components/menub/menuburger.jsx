
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"
import './menuburger.css'

function MenuBurger({ items, active, setActive }) {

	active ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";

	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
			<div className="menu-content">
				<ul>
					{items.map((item) => {
						return <li>
							<NavLink to={item.path}>{item.value}</NavLink>
						</li>
					})}
					<li className={active ? 'button-menu active' : 'button-menu'} onClick={() => setActive(false)}>
						<button type="button" class="btn btn-outline-light" onClick={() => changeLanguage("ru")}>RU</button>
					</li>
					<li className={active ? 'button-menu active' : 'button-menu'} onClick={() => setActive(false)}>
						<button type="button" class="btn btn-outline-light" onClick={() => changeLanguage("en")}>EN</button>
					</li>
				</ul>
			</div>
		</div>
	);
}


export default MenuBurger;