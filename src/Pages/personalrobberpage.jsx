
import { useParams } from 'react-router-dom';
import { robbersList } from '../helpers/robbersList';
import Carousel from 'react-bootstrap/Carousel';
import Timeline from '../Components/timeline/timeline';
import VideoElement from '../Components/youtubevideo/videoelement';
import { useTranslation } from "react-i18next"
import Button from 'react-bootstrap/Button';
import Map from '../Components/map/map';

function PersonalRobberPage() {
	const { id } = useParams();
	const currRobber = robbersList[id];

	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<main className="section">
			<div className="container">
				<div className="robber-personal">

					<h1 className="title-1">{currRobber.name}</h1>
					<h2 className="title-2">{currRobber.yearsOfLife}</h2>

					<img src={currRobber.img} alt="" className="robber-personal__cover" />

					<div className="robber-personal__desc">
						<p>{currRobber.description}</p>
					</div>

					<div className="timeline__container">
						< Timeline robber={currRobber} />
					</div>

					<h2 className="title-2">{t("Map")}</h2>
					<div style={{width: '100%', height: '100%'}}>
						<Map mLat={parseFloat(currRobber.mLat)}
							 mLng={parseFloat(currRobber.mLng)}/>
					</div>
					<h2 className="title-2">{t("Video")}</h2>
					<VideoElement name={currRobber.name} />

					<Button href="https://www.youtube.com/" target='_blank' style={
						{ background: "black", marginTop: "10px" }
					}>
						Link
					</Button>

				</div>
			</div>
		</main >
	);
}

export default PersonalRobberPage;