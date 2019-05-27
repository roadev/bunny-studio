import { create } from 'apisauce';

const usersApi = create({
	baseURL: 'http://localhost:5000/api/v1',
	headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const getRequest = async (endpoint: string): Promise<any> => {
	const { data } = await usersApi.get(endpoint);
	return data;
};

export const postRequest = async (endpoint: string, payload: any): Promise<any> => {
	const { data } = await usersApi.post(endpoint, { ...payload });
	return data;
};

export const patchRequest = async (endpoint: string, payload: any): Promise<any> => {
	const { data } = await usersApi.patch(endpoint, { ...payload });
	return data;
};

export const deleteRequest = async (endpoint: string): Promise<any> => {
	const { data } = await usersApi.delete(endpoint);
	return data;
};
