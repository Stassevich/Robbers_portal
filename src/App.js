import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./helpers/scrollToTop"

import Navbar from "./Components/navigation/navbar"
import HomePage from "./Pages/homepage"
import RobbersPage from "./Pages/robberspage"
import Contacts from "./Pages/contacts"
import PersonalRobberPage from "./Pages/personalrobberpage"
import { useTranslation } from "react-i18next"

function App() {



	return (
		<div className="App">

			<Router>
				<ScrollToTop />
				<Navbar />

				<Routes>

					<Route path="/" element={<HomePage />} />
					<Route path="/robberspage" element={<RobbersPage />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/robberpersonal/:id" element={<PersonalRobberPage />} />

				</Routes>

			</Router>
		</div>
	);
}

export default App;
