import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import HomePage from './Pages/HomePage';
import Footer from './components/shared/Footer';

function App() {
	return (
		<div className="app__container">
			<nav>
				<NavBar />
			</nav>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
