
import './mainpart.css'
import image1 from '../../../img/header_photo.jpg'

function Mainpart() {
	return (
		<section className="page">
			<div className="page__main-block main-block">
				<div className="main-block-container container">
					<div className="main-block-body">
						<h1 className="main-block-title">
							Robbers portal!
						</h1>
						<span className="main-block-description">
							Do not steal anything!
						</span>
					</div>
				</div>
				<div className="main-block-image">
					<img src={image1} alt="cover"></img>
				</div>
			</div>
		</section>
	);
}

export default Mainpart;