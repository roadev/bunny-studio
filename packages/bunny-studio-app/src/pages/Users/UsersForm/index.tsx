import React, { FormEvent, Component, Fragment } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Growl } from 'primereact/growl';
// import { useService } from '../../../components/utils/useService';
import { createUser } from '../../../services/users';
import { placeholder } from '@babel/types';

interface State {
	name: string;
}

class UsersForm extends Component {
	public state = {
		name: ''
	};
	
	public growl = null;

	public handleChange = (name) => {
		console.log(name)
		this.setState({ name });
	};

	public handleSubmit = (): void => {
		createUser( { name: this.state.name }).then(user => {
			console.log(user);
			this.growl.show({
				severity: 'success',
				summary: 'User created!',
				detail: `User ${user.name} has been created`
			});
		});
	};

	public render(): JSX.Element {
		return (
			<Fragment>
				<Growl ref={(el) => this.growl = el} />
				<div className="p-inputgroup p-grid p-justify-center" style={{ marginTop: '3rem' }}>
					<span className="p-inputgroup-addon">
						<i className="pi pi-user"></i>
					</span>
					<InputText
						className="p-col-3"
						placeholder="Name"
						value={this.state.name}
						onChange={(e: FormEvent<HTMLInputElement>) => this.handleChange(e.currentTarget.value)}
					/>
					<Button label="Create user" onClick={this.handleSubmit} />
				</div>
			</Fragment>
		);
	}

}

export default UsersForm;
