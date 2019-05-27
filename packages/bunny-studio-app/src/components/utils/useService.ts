import { useState, useEffect } from 'react';

export function useService (service) {
	const [data, updateData] = useState(undefined);

	// empty array as second argument equivalent to componentDidMount
	useEffect(() => {
		service().then((serviceData: any) => {
			updateData(serviceData);
		});
	}, []);

	return data;
};
