import { getRequest, postRequest, patchRequest, deleteRequest } from './tasksApi';
import { Task } from './interfaces';

export const getTasks = async (query: string): Promise<Task[]> => getRequest(`/tasks/${query}`);

export const updateTask = async (id, payload): Promise<Task> => patchRequest(`/tasks/${id}`, { ...payload });

export const createTask = async (payload): Promise<Task> => postRequest('/tasks', { ...payload });

export const deleteTask = async (id): Promise<Task> => deleteRequest(`/tasks/${id}`);
