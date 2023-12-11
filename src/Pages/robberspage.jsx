

import Robber from '../Components/robbers/robber';

import { robbersList } from '../helpers/robbersList'

function RobbersPage() {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Robbers</h2>
				<ul className="projects">

					{robbersList.map((robber) => {
						return < Robber key={robber.id} robbersName={robber.name} img={robber.img} />
					})}

				</ul>
			</div>
		</main>
	);
}

export default RobbersPage;