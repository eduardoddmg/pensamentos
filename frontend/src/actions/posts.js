import axios from 'axios';

export const addPost = async(data) => {
	try {
		const response = await axios.post('http://localhost:3000/posts', data);
		return { type: 'success', message: 'Post criado com sucesso'};
	} catch (err) {
		return { type: 'err', message: 'Não foi possível adicionar o post'};
	}
}

export const getPosts = async() => {
	try {
		const response = await axios.get('http://localhost:3000/posts');
		return { type: 'success', data: response.data };
	} catch (err) {
		return { type: 'err', message: 'Não foi possível pegar os posts'};
	}
}