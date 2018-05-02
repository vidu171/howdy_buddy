import React from 'react';
import { Image, Grid, Card } from 'semantic-ui-react';

const img={
	height:'180px',
	width:'auto'
}

export default class Therapist extends React.Component{
	render(){
		const person=this.props.person;
		const people=person.map((item)=> <MapTherapist person={item}/>);
		return(
			<Grid.Row>
				{people}
			</Grid.Row>
		);
	}
}
class MapTherapist extends React.Component{
	render(){
		const person=this.props.person;
		return(
			<Grid.Column mobile={16} tablet={8} computer={4}>
				<Card>
					<Image src='http://i66.tinypic.com/rw4781.jpg' style={img} size='medium' circular />
					<Card.Content>
						<Card.Header>{person.name}</Card.Header>
						<p>{person.institute}</p>
						<p>{person.address}</p>
						<p>{person.phone}</p>
						<p>{person.cost}</p>
						<p>{person.time}</p>
					</Card.Content>
				</Card>
			</Grid.Column>
		);
	}
}