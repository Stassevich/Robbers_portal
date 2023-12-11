
import project01 from '../../img/projects/01.jpg'
import './robberstyle.css'

function Robber(props) {
	return (
		<li className="project">
			<a href="./project-page.html">
				<img src={props.img} alt="Project img" className="project__img" />
				<h3 className="project__title">
					{props.robbersName}
				</h3>
			</a>
		</li>
	);
}

export default Robber;