import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";

export default class App extends Component {
	state = {
		activities: []
	};

	componentDidMount() {
		axios.get("http://localhost:5000/api/activities").then(response => {
			console.log(response);
			this.setState({
				activities: response.data
			});
		});
	}

	render() {
		return (
			<div>
				<Header as="h2">
					<Icon name="users" />
					<Header.Content>Reactivities</Header.Content>
					<List>
						{this.state.activities.map((activity: any) => (
							<List.Item key={activity.id}>{activity.title}</List.Item>
						))}
					</List>
					<ul></ul>
				</Header>
			</div>
		);
	}
}
