
import Footer from "../Components/mainpage/footer/footer";
import Header from "../Components/mainpage/header/header";
import Mainpart from "../Components/mainpage/mainpart/mainpart";


// Styles 
import './mainpage.css'
import '../styles/reset.css'
import '../styles/style.css'

function Mainpage() {
	return (
		<div className="Mainpage">
			<Header />
			<Mainpart />
			<Footer />
		</div>

	);
}

export default Mainpage;