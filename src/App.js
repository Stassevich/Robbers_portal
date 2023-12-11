import "./styles/main.css"


import Navbar from "./Components/navigation/navbar"
import Header from "./Components/header/header"
import MainPage from "./Components/main/mainpart"
import Footer from "./Components/footer/footer"
import HomePage from "./Pages/homepage"
import RobbersPage from "./Pages/robberspage"
import Contacts from "./Pages/contacts"
import MainPart from "./Components/main/mainpart"

function App() {
	return (
		<div className="App">
			<Navbar />

			<RobbersPage />

			<Footer />
		</div>
	);
}

export default App;
