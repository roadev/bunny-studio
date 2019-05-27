import React, {FormEvent, Component, Fragment, ComponentPropsWithoutRef} from 'react';
import {RouteComponentProps, withRouter } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Growl } from 'primereact/growl';
import { Dropdown } from 'primereact/dropdown';
import {SelectButton} from 'primereact/selectbutton';
import { createTask } from '../../../services/tasks';
import { getUsers } from '../../../services/users';
import { Task } from '../TasksList/interfaces';
import { User } from '../../Users/UsersList/interfaces';

interface Props {
	match: any;
}

interface State {
	users: User[];
	selectedUser: string | number;
	description: string;
	taskState: string;
}

class TasksForm extends Component<Props & RouteComponentProps, State> {
	public state: State = {
		description: '',
		users: [],
		selectedUser: '',
		taskState: 'todo'
	};

	public componentDidMount(): void {
		const { id } = this.props.match.params;
		console.log('id in task form', id)
		getUsers().then((users) => {
			this.setState({ users, selectedUser: id ? Number(id) : '' });
		});
	}

	public growl = null;

	public handleChange = (key, value) => () => {
		console.log(name)
		this.setState({ [key]: value } as any);
	};

	public handleSubmit = (): void => {
		const { description, selectedUser, taskState } = this.state;
		createTask(
			{ description, 'user_id': selectedUser, state: taskState }
			).then(task => {
			console.log(task);
			this.growl.show({
				severity: 'success',
				summary: 'Task created!',
				detail: 'Task has been created'
			});

			setTimeout(() => {
				location.reload();
			}, 1500);
		});
	};

	public render(): JSX.Element {
		const taskStates = [
			{ label: 'ToDo', value: 'todo' },
			{ label: 'Done', value: 'done' },
		]
		console.log(this.state);
		return (
			<Fragment>
				<Growl ref={(el) => this.growl = el} />
				<div className="p-inputgroup p-grid p-justify-center" style={{ marginTop: '1rem' }}>
					<Dropdown
						className="p-col-4"
						value={this.state.selectedUser}
						options={this.state.users.map(u => ({ label: u.name, value: u.id }))}
						onChange={(e) => this.handleChange('selectedUser', e.value)()}
						// itemTemplate={this.carTemplate}
						filter={true}
						filterPlaceholder="Select user"
						filterBy="label,value"
						showClear={true}
					/>
				</div>
				<div className="p-inputgroup p-grid p-justify-center" style={{ marginTop: '1rem' }}>
					<SelectButton
						value={this.state.taskState}
						options={taskStates}
						onChange={(e) => this.handleChange('taskState', e.value)()}
					/>
				</div>
				<div className="p-inputgroup p-grid p-justify-center" style={{ marginTop: '2rem' }}>
					<span className="p-inputgroup-addon">
						<i className="pi pi-list"></i>
					</span>
					<InputText
						className="p-col-3"
						placeholder="Description"
						value={this.state.description}
						onChange={(e: FormEvent<HTMLInputElement>) => this.handleChange('description', e.currentTarget.value)()}
					/>
					<Button label="Create task" onClick={this.handleSubmit} />
				</div>

			</Fragment>
		);
	}

}

export default withRouter(TasksForm);
