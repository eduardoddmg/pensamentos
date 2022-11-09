export * from './auth';
export * from './posts';

import { AuthProvider } from './auth';
import { PostsProvider } from './posts';


export const ContextProvider = ({ children }) => {
	return (
		<>	
			<AuthProvider>
				<PostsProvider>
					{children}					
				</PostsProvider>
			</AuthProvider>
		</>
	)
}