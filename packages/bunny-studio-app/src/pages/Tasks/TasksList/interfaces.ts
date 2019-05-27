import {RouteComponentProps} from "react-router-dom";

export interface Task {
	id: number;
	description: string;
	user_id: number;
	state: 'todo' | 'done';
}

export interface State {
	tasks: Task[];
}

export interface Props {
	match: any;
	location: any;
}
