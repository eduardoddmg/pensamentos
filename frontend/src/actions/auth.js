import axios from 'axios';

export const login = async(data) => {
	try {
		const users = await axios.get('http://localhost:3000/users');
    	const user = users.data.find(item => item.username === data.username);
    	if (user) {
	    	if (user.password === data.password) return { type: 'success', message: 'login com sucesso' };
	    	else return { type: 'err', message: 'Senha errada'};
    	}
    	else return { type: 'err', message: 'usuario nao existe' };
	} catch (err) {
		return { type: 'err', message: 'Não foi possível fazer o login'}
	}
};

export const register = async(data) => {
	try {
		const users = await axios.get('http://localhost:3000/users');
    	const user = users.data.find(item => item.username === data.username);
    	if (user) return { type: 'err', message: 'Usuário já existente'};
    	else {
			const users = await axios.post('http://localhost:3000/users', data);
			return { type: 'success', message: 'Usuário criado com sucesso!' };
    	}
	} catch (err) {
		return { type: 'err', message:'Não foi possível criar a conta' }
	}
}