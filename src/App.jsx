import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import HomePage from './Pages/HomePage';
import Footer from './components/shared/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
	return (
		<div className="app__container flex-container">
			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
