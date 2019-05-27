import { create } from 'apisauce';

const api = create({
	baseURL: 'http://localhost:5000/api/v1',
	headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const getRequest = async (endpoint: string): Promise<any> => {
	const { data } = await api.get(endpoint);
	return data;
};

export const postRequest = async (endpoint: string, payload: any): Promise<any> => {
	const { data } = await api.post(endpoint, { ...payload });
	return data;
};

export default api;
