import React, {Component, Fragment} from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Task from '../Task';
import { getTasks } from '../../../services/tasks';
import { State, Task as ITask, Props } from './interfaces';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class TasksList extends Component<Props & RouteComponentProps, State> {
	public static getDerivedStateFromProps(props, state) {
		return null;
	}

	public state: State = {
		tasks: []
	};

	public componentDidMount(): void {
		const { id } = this.props.match.params;
		const query = id ? `?user_id= ${id}` : '';
		getTasks(query).then((tasks: ITask[]) => {
			this.setState({ tasks });
		});
	}

	public render(): JSX.Element {
		const { tasks } = this.state;
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
					<div className="p-col-6">
						<ScrollPanel style={{  height: '350px' }} className="">
							{tasks.map(t => (
								<Task key={t.id} name={t.description} id={t.id} />
							))}
						</ScrollPanel>
					</div>

				</section>
			</Fragment>
			
		);
	}
};

export default withRouter(TasksList);
