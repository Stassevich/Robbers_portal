

import Robber from '../Components/robbers/robber';

import { robbersList } from '../helpers/robbersList';

import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next"
import './../styles/robberspagestyle.css'
import Footer from '../Components/footer/footer';


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

	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<>
			<main className="section">
				<div className="container">

					<div className="robberspage">
						<input type="text"
							placeholder={t("Search")}
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
						/>

						<h2 className="title-1">{t("Robbers")}</h2>
						<ul className="projects">

							{List.map((robber) => {
								return < Robber key={robber.id} robbersName={robber.name} img={robber.img} index={robber.id} />
							})}

						</ul>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default RobbersPage;