

import Robber from '../Components/robbers/robber';

import { robbersList } from '../helpers/robbersList';

import { useState, useEffect } from 'react';



const filterList = (searchText, list) => {
	if (!searchText) {
		return list;
	}
	return list.filter(({ name }) =>
		name.toLowerCase().includes(searchText.toLowerCase())
	);
}


function RobbersPage() {

	const [List, setList] = useState(robbersList)
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		const Debounce = setTimeout(() => {
			const filteredList = filterList(searchQuery, robbersList)
			setList(filteredList);
		}, 300);
	});

	return (
		<main className="section">
			<div className="container">

				<input type="text"
					placeholder="Search..."
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>

				<h2 className="title-1">Robbers</h2>
				<ul className="projects">

					{List.map((robber) => {
						return < Robber key={robber.id} robbersName={robber.name} img={robber.img} index={robber.id} />
					})}

				</ul>
			</div>
		</main>
	);
}

export default RobbersPage;