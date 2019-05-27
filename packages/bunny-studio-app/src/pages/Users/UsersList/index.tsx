import React, { Component } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { equals } from 'ramda';
import User from '../User';
import { getUsers } from '../../../services/users';
import { State, User as IUser } from './interfaces';

class UsersList extends Component<{}, State> {
	public static getDerivedStateFromProps(props, state) {
		return null;
	}

	public state: State = {
		users: []
	};

	public componentDidMount(): void {
		getUsers().then((users: IUser[]) => {
			this.setState({ users });
		});
	}

	public render(): JSX.Element {
		const { users } = this.state;
		return (
			<section className="p-grid p-justify-center" style={{ marginTop: '2rem' }}>
				<div className="p-col-6">
					<ScrollPanel style={{  height: '400px' }} className="">
						{users.map(u => (
							<User key={u.id} name={u.name} id={u.id} />
						))}
					</ScrollPanel>
				</div>

			</section>
		);
	}
};

export default UsersList;
