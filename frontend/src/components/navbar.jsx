import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function Navbar() {
	return (
		<>
			<Flex justify="space-between" bg="green.500" px="15%" py={3} color="white" fontWeight="bold">
				<Link to='/'>
					Home
				</Link>	
				<Link to='/logout'>
					Sair
				</Link>							
			</Flex>			
		</>
	)
}