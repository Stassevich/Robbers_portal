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

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	function getRandomRobber() {
		return robbersList[getRandomInt(5)];
	}

	const randomRobber = getRandomRobber();

	return (
		<main className="section">
			<div className="container">

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">{t("Robber_of_the_day")}</h2>
						<div className="random-robber">
							<Robber className="robberOfDay" key={randomRobber.id} robbersName={randomRobber.name} img={randomRobber.img} index={randomRobber.id} />
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