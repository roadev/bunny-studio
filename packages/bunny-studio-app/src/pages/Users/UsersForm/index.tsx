import React, { FormEvent, useState } from 'react';
import { InputText } from 'primereact/inputtext';

function UsersForm (): JSX.Element {
	const [name, setName] = useState('');

	return (
		<div className="p-inputgroup">
			<span className="p-inputgroup-addon">
				<i className="pi pi-user"></i>
			</span>
			<InputText
				placeholder="Name"
				value={name}
				onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
			/>
		</div>
	);
}

export default UsersForm;
