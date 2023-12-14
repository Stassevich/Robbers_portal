
import { NavLink } from 'react-router-dom';

import './robberstyle.css'

function Robber(props) {
	return (
		<NavLink to={`/robberpersonal/${props.index - 1}`}>
			<li className="project">
				<img src={props.img} alt="Project img" className="project__img" />
				<h3 className="project__title">
					{props.robbersName}
				</h3>
			</li>
		</NavLink>
	);
}

export default Robber;