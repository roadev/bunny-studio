import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { History } from 'history';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Growl } from 'primereact/growl';
import { State } from '../TasksList/interfaces';
import { deleteTask } from '../../../services/tasks';

interface Props {
	id: number;
	name: string;
	history: History;
}

class Task extends Component<Props & RouteComponentProps, State> {
	public growl = null;

	public handleDelete = () => {
		deleteTask(this.props.id).then(() => {
			this.growl.show({
				severity: 'success',
				summary: 'Task deleted!',
				detail: 'Task has been deleted',
			});
		});
	};

	public render(): JSX.Element {
		const { id, name, history } = this.props;
		return (
			<Fragment>
				<Growl ref={(el) => this.growl = el} />
				<Card title={name}>
					{/*<Button icon="pi pi-list" style={{ marginRight: '1rem' }} onClick={() => history.push(`/users/${id}/tasks`)}/>*/}
					<Button icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '1rem' }} />
					<Button icon="pi pi-trash" className="p-button-danger" onClick={this.handleDelete} />
				</Card>
			</Fragment>
		);
	}
}

export default withRouter(Task);
