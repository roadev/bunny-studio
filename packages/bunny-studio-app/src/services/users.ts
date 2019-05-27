import { getRequest, postRequest, patchRequest, deleteRequest } from './api';
import { User } from './interfaces';

export const getUsers = async (): Promise<User[]> => getRequest('/users');

export const getUser = async (id): Promise<User> => getRequest(`/users/${id}`);

export const updateUser = async (id, payload): Promise<User> => patchRequest(`/users/${id}`, { payload });

export const createUser = async (id, payload): Promise<User> => postRequest(`/users/${id}`, { payload });

export const deleteUser = async (id): Promise<User> => deleteRequest(`/users/${id}`);
