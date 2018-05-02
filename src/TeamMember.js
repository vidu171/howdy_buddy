import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

const img={
	height:'230px',
	width:'auto'
}

export default class TeamMember extends React.Component{
	render(){
		const person=this.props.person;
		const people=person.map((item)=> <Map person={item}/>);
		return(
			<Grid.Row>
				{people}
			</Grid.Row>
		);
	}
}
class Map extends React.Component{
	render(){
		const person=this.props.person;
		return(
			<Grid.Column mobile={16} tablet={8} computer={4}>
				<Card>
					<img className="ui medium circular image" src={person.photo} alt='Our Team Mate' style={img}/>
					<div className="content">
						<b className="header">{person.name}</b>
						<p >{person.post}</p>
						
					</div>
				</Card>
			</Grid.Column>
		);
	}
}