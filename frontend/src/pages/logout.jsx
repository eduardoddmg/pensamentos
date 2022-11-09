import { Center, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAuth, usePosts } from '../context';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
	const auth = useAuth();
	const posts = usePosts();
	const navigate = useNavigate();

	useEffect(() => {
		auth.logout();
		posts.removeAllPosts();
		navigate('/');
	}, []);

	return (
		<Center my="20vh">
			<Spinner />
		</Center>
	)
}