import React from 'react';
import TasksList from "./TasksList";
import TasksForm from "./TasksForm";

const Tasks = (): JSX.Element => (
	<section style={{ marginTop: '2rem' }}>
		<TasksList />
		<TasksForm />
	</section>
);

export default Tasks;
