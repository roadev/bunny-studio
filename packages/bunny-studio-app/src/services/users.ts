import { getRequest } from './api';
import { User } from './interfaces';

export const getUsers = async (): Promise<User[]> => getRequest('/users');

export const getUser = async (id): Promise<User> => getRequest(`/users/${id}`);
