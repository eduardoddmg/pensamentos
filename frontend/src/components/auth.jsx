import { Outlet } from 'react-router-dom';
import { useAuth, usePosts } from '../context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const WithAuth= ()=> {
	const auth = useAuth();
	const posts = usePosts();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth.isLogged) navigate('/login')
	}, []);

	useEffect(() => {
		if (auth.isLogged) {
			posts.getPosts();
			navigate('/');
		}
	}, [auth.isLogged]);
	
	return (
		<Outlet />
	)
}

export const WithoutAuth = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.isLogged) {
			console.log('sjansjkan')
			navigate('/');
		}
	});

	return (
		<Outlet />
	)
}