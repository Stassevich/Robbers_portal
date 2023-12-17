import Robber from "../robbers/robber";
import Developer from  '../developer/developer';
import { robbersList } from '../../helpers/robbersList';
import { ListDevs } from '../../helpers/developers';
import { useTranslation } from "react-i18next"
import './mainpartstyle.css'



function MainPart() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	function getRobberOfDay() {
		const d = new Date().getDate();
		return robbersList[d % 5];
	}

	const robberOfDay = getRobberOfDay();

	return (
		<main className="section">
			<div className="container">
				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">{t("Robber_of_the_day")}</h2>
						<div className="day-robber">
							<Robber className="robber-of-day" key={robberOfDay.id} robbersName={robberOfDay.name} img={robberOfDay.img} index={robberOfDay.id} />						
                            <p className="description">{robberOfDay.description}</p>
						</div>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">{t("Developers")}</h2>
						<div className="devs">
						    {ListDevs.map((Dev) => {
							    return < Developer key={Dev.id} Name={Dev.gitName} img={Dev.img} r={Dev.url} />
						    })}
						</div>	
					</li>
				</ul>

			</div>
		</main>
	);
}

export default MainPart;