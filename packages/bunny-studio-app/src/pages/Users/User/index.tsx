import React, { Component, Fragment } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { History } from 'history';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Growl } from 'primereact/growl';
import {Dialog} from "primereact/dialog";
import { deleteUser } from '../../../services/users';


interface Props {
	id: number;
	name: string;
	history: History;
}

interface State {
	showEditForm: boolean;
}

class User extends Component<Props & RouteComponentProps, State> {
	public state = {
		showEditForm: false,
	} ;

	public growl = null;

	public handleDelete = () => {
		deleteUser(this.props.id).then(() => {
			this.growl.show({
				severity: 'success',
				summary: 'User deleted!',
				detail: 'User has been deleted',
			});
			setTimeout(() => {
				location.reload();
			}, 1500);
		});
	};

	public handleOpen = () => {
		this.setState({ showEditForm: true })
	}

	public handleClose = () => {
		this.setState({ showEditForm: false });
	}

	public render(): JSX.Element {
		const { id, name, history } = this.props;
		return (
			<Fragment>
				<Dialog
					header="Edit user"
					visible={this.state.showEditForm}
					style={{ width: '50vw' }}
					modal={true}
					onHide={this.handleClose}
				>
					Content
				</Dialog>
				<Growl ref={(el) => this.growl = el} />
				<Card title={name}>
					<Button
						icon="pi pi-list"
						style={{ marginRight: '1rem' }}
						onClick={
							() => history.push(
								{
									pathname: `/users/${id}/tasks`,
									state: {
										name
									}
								}

							)
						}
					/>
					{/*<Button*/}
					{/*	icon="pi pi-pencil"*/}
					{/*	className="p-button-warning"*/}
					{/*	style={{ marginRight: '1rem' }}*/}
					{/*	onClick={this.handleOpen}*/}
					{/*/>*/}
					<Button icon="pi pi-trash" className="p-button-danger" onClick={this.handleDelete} />
				</Card>
			</Fragment>
		);
	}
}

export default withRouter(User);
