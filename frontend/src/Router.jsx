import Login from './pages/login';
import Register from './pages/register';
import { Routes, Route } from 'react-router-dom';

export default function Router() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	)
}