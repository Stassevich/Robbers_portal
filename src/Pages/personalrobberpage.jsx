
import img from '../img/projects/02-big.jpg'
import githubico from '../img/icons/gitHub-black.svg'
import Button from 'react-bootstrap/Button';

function PersonalRobberPage() {
	return (
		<main className="section">
			<div className="container">
				<div className="project-details">

					<h1 className="title-1">Video service</h1>

					<img src={img} alt="" className="project-details__cover" />

					<div className="project-details__desc">
						<p>Skills: React, Node.js, MongoDB</p>
					</div>

					<Button href="https://www.youtube.com/" target='_blank' style={
						{ background: "black" }
					}>
						Link
					</Button>


				</div>
			</div>
		</main >
	);
}

export default PersonalRobberPage;