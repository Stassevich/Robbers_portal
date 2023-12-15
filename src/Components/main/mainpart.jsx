import Robber from "../robbers/robber";
import { robbersList } from '../../helpers/robbersList';
import { useTranslation } from "react-i18next"

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
						<p>Some links</p>
					</li>
				</ul>

			</div>
		</main>
	);
}

export default MainPart;