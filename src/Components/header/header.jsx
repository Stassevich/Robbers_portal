
import './headerstyle.css'

function Header() {
	return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>Welcome to <em>Robbers</em></strong><br />
					portal
				</h1>
				<div className="header__text">
					<p>We are begging you <br /> not to steal anything</p>
				</div>
				<a href="#!" className="btn">Download CV</a>
			</div>
		</header>
	);
}

export default Header;