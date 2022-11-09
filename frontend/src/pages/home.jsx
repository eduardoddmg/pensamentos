import { Box, Flex, Text, Heading, Button, Textarea, Center, Spinner } from '@chakra-ui/react';
import { useAuth, usePosts } from '../context';
import { Navbar } from '../components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const Card = ({ text, username }) => {
	return (
		<Box bg="#ff9" my={2} p={2} w="50%" borderRadius="lg">
			<Text fontWeight="bold">{username}</Text>
			<Text>{text}</Text>
		</Box>
	)
}

export default function Home() {
	const auth = useAuth();
	const posts = usePosts();

	const [addPermission, setAddPermission] = useState(false);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		data.usernameCreated = auth.username;
		posts.addPost(data);
		reset({text: ""});
	}

	return (
		<>
			{!auth.isLogged ? <Center my="20vh">
				<Spinner />
				</Center> : 
			<>
				<Navbar />
				<Flex p={5} px="15%" direction="column">
					<Heading>Olá, {auth.username}</Heading>	
					<Flex as="form" direction="column" onSubmit={handleSubmit(onSubmit)}>
						<Textarea mt={5} resize="none" w="50%" placeholder='O que tem no seu pensamento?' {...register('text')} />
						<Button type="submit" alignSelf="flex-start" my={3} colorScheme="green" borderRadius="lg">Compartilhar</Button>		
					</Flex>
					{posts.posts && posts.posts.map((post, index) => <Card text={post.text} username={post.usernameCreated} key={index} />)}
				</Flex>
			</>
		}
		</>
	)
}