import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const head={
	fontSize : '20px'
}

const body={
	fontSize : '17px'
}

export default class Specialist extends React.Component{
	render(){
		const person=this.props.person;
		const people=person.map((item)=> <MapSpecialist person={item}/>);
		return(
			<Grid.Row>
				<Grid.Column mobile={16} tablet={16} computer={16}>
					{people}
				</Grid.Column>
			</Grid.Row>
		);
	}
}
class MapSpecialist extends React.Component{
	render(){
		const person=this.props.person;
		return(
			<Segment padded color='pink' textAlign='center'>
				<Segment textAlign='center'><b style={head}>{person.name}</b></Segment>
				<p textAlign='center'>
					<b style={body}>About</b>
					<p textAlign='center' style={body}>{person.intro}</p>
				</p>
				<p textAlign='center'>
					<b style={body}>Specialised In</b>
					<p textAlign='center' style={body}>{person.special}</p>
				</p>
			</Segment>			
		);
	}
}