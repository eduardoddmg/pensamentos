import axios from 'axios';

export const login = async(data) => {
	try {
		const users = await axios.get('http://localhost:3000/users');
    	const user = users.data.find(item => item.username === data.username);
    	if (user && user.password === data.password) return { type: 'success', message: 'login com sucesso' };
    	else return { type: 'err', message: 'Não foi possível fazer o login'};
	} catch (err) {
		return { type: 'err', message: 'Não foi possível fazer o login'}
	}
}