import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";

export default class App extends Component {
	state = {
		values: []
	};

	componentDidMount() {
		axios.get("http://localhost:5000/api/values").then(response => {
			console.log(response);
			this.setState({
				values: response.data
			});
		});
	}

	render() {
		return (
			<div>
				<Header as="h2">
					<Icon name="users" />
					<Header.Content>Reacivities</Header.Content>
					<List>
						{this.state.values.map((value: any) => (
							<List.Item key={value.id}>{value.name}</List.Item>
						))}
					</List>
					<ul></ul>
				</Header>
			</div>
		);
	}
}
