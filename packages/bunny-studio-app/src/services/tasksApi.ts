import { create } from 'apisauce';

const tasksApi = create({
	baseURL: 'http://localhost:5001/api/v1',
	headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const getRequest = async (endpoint: string): Promise<any> => {
	const { data } = await tasksApi.get(endpoint);
	return data;
};

export const postRequest = async (endpoint: string, payload: any): Promise<any> => {
	const { data } = await tasksApi.post(endpoint, { ...payload });
	return data;
};

export const patchRequest = async (endpoint: string, payload: any): Promise<any> => {
	const { data } = await tasksApi.patch(endpoint, { ...payload });
	return data;
};

export const deleteRequest = async (endpoint: string): Promise<any> => {
	const { data } = await tasksApi.delete(endpoint);
	return data;
};
