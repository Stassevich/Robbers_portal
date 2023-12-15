import { useTranslation } from "react-i18next"
import './headerstyle.css'

function Header() {

	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>{t("Welcome_to")}<em> {t("Robbers")}</em></strong><br />
					{t("Portal")}
				</h1>
				<div className="header__text">
					<p>{t("Catchphrase_1")} <br /> {t("Catchphrase_2")}</p>
				</div>

			</div>
		</header>
	);
}

export default Header;