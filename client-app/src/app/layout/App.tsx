import React, { useState, useEffect } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";

const App = () => {
	const [activities, setActivities] = useState<IActivity[]>([]);

	useEffect(() => {
		axios
			.get<IActivity[]>("http://localhost:5000/api/activities")
			.then(response => {				
				/*console.log(response);*/
				setActivities(response.data)
			});
			/* prevent running again after our  component has monunted */		
		/* }, []);*/
	});

	return (
		<div>
			<Header as="h2">
				<Icon name="users" />
				<Header.Content>Reactivities</Header.Content>
				<List>
					{activities.map(activity => (
						<List.Item key={activity.id}>{activity.title}</List.Item>
					))}
				</List>
				<ul></ul>
			</Header>
		</div>
	);
};
export default App;
