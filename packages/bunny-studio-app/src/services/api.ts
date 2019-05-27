import { create } from 'apisauce';

const api = create({
	baseURL: 'http://localhost:5000/api/v1',
	headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const getRequest = async (endpoint: string): Promise<any> => {
	const { data } = await api.get(endpoint);
	return data;
};

export default api;
