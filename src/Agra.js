import React from 'react';
import Therapist from './Therapist';
import { Grid } from 'semantic-ui-react';

const team={
	textAlign:'center'
}

export default class Agra extends React.Component{
	
	render(){
		const agraTherapist1=[{
			name:'Dr Rakesh Jain',
			institute:'Mental Hospital Campus',
			address:'Opp Billochpura Railway Station, Agra, Uttar Pradesh',
			phone:'092197 7013',
			cost:'Free of cost',
			time:'11:00am-4:00pm'			
		},{
			name:'Satyadhar Dwivedi OCD',
			institute:'Educational Psychologist',
			address:'Opposite to Bilochpura Railway Station, Agra, Uttar Pradesh 282002',
			phone:'0562 2967811',
			cost:'imhh.agra@gmail.com',
			time:''			
		},{
			name:'Samadhan Kendra',
			institute:'Maruti Tower',
			address:'GF-4, 20/4, (Near Shaheed Smarak), Sanjay Place, Agra, Uttar Pradesh 282002',
			phone:'09917369369',
			cost:'Rs 500',
			time:''			
		},{
			name:'Dr Chinu Agrawal',
			institute:'',
			address:'Flat 102, Shivam Elegant Near Manglam Vihar, Sikandra Bodla Road, Agra, Uttar Pradesh 282007',
			phone:'09837007165',
			cost:'Rs 600 - consultation fees',
			time:'Rs 1200 - counselling fees'			
		}];
		return(
			<div>
				<h2 style={team}>We have found Some Psychologists in Agra</h2>
				<Grid container columns={4}>
					<Therapist person={agraTherapist1}/>
					
					<b>Disclamer:</b>Howdybuddy is not presonally or professionally associated with any psychologist, psychiatrists clinics or mental health hospitals listed under the section 'Help Near You'.
				</Grid>
			</div>
		);
	}
}