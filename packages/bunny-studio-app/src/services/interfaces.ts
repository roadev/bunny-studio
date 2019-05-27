export interface User {
	id: number;
	name: string;
}

export interface Task {
	id: number;
	description: string;
	user_id: number;
	state: string;
}
