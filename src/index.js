import React from 'react';
import ReactDOM from 'react-dom/client';
import Mainpage from './Pages/mainpage';


// Styles
import './styles/reset.css'
import './styles/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Mainpage />
	</React.StrictMode>
);

