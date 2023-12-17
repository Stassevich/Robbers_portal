
import github from "../../img/icons/gitHub.svg"

import './footerstyle.css'

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://github.com/IvanManhattan/Robbers_portal" target="_blank">
								<img src={github} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2023 Robbers portal</p>
					</div>
				</div>
			</div>
		</footer>
	);
}


export default Footer;