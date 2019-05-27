import React, {Component, Fragment} from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {ProgressSpinner} from 'primereact/progressspinner';
import Task from '../Task';
import { getTasks } from '../../../services/tasks';
import { State, Task as ITask, Props } from './interfaces';



class TasksList extends Component<Props & RouteComponentProps, State> {
	public state: State = {
		tasks: [],
		loading: true
	};

	public componentDidMount(): void {
		const { id } = this.props.match.params;
		const query = id ? `?user_id= ${id}` : '';
		getTasks(query).then((tasks: ITask[]) => {
			this.setState({ tasks, loading: false });
		});
	}

	public render(): JSX.Element {
		const { tasks, loading } = this.state;
		const { state } = this.props.location;
		const name = state ? state.name : undefined;
		return (
			<Fragment>
				{
					name ? (
						<h3 style={{ textAlign: 'center' }}>Tasks by {name}</h3>
					) : null
				}

				<section className="p-grid p-justify-center" style={{ marginTop: '2rem' }}>
					{loading ? <ProgressSpinner /> : null }
					<div className="p-col-6">
						<ScrollPanel style={{  height: '400px' }} className="">
							{tasks.map(t => (
								<Task key={t.id} description={t.description} id={t.id} state={t.state} />
							))}
						</ScrollPanel>
					</div>

				</section>
			</Fragment>
			
		);
	}
};

export default withRouter(TasksList);
