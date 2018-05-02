import React from 'react';
import Therapist from './Therapist';
import { Grid } from 'semantic-ui-react';

const team={
	textAlign:'center'
}

export default class Kanpur extends React.Component{
	
	render(){
		const kanpurTherapist1=[{
			name:'Dr. Vijay Mahendru',
			institute:'Education - MBBS, MD - Psychiatry',
			address:'117/40, Psychiatric And De Addiction Centre., Kanpur, Uttar Pradesh 208005',
			phone:'098391 06310',
			cost:'Fees - 400/- at clinic',
			time:''			
		},{
			name:'Dr. Avashesh Gupta',
			institute:'Education - MD-Homeopathy Psychiatry, Health Promotion diploma, BHMS',
			address:' 99, Vasant Vihar, Naubasta, Kanpur, Uttar Pradesh 208011',
			phone:'099354 24404',
			cost:'200-500/- at clinic 100/- online',
			time:''			
		},{
			name:'Dr. Tarun Nigam',
			institute:'Education - MBBS, MD-Psychiatry, MD - Psychiatry - B.J. Medical College',
			address:'111-A/45 Ashok Nagar, Kanpur, Uttar Pradesh 208012',
			phone:'096969 22333',
			cost:'300/- at clinic',
			time:''			
		},{
			name:'Dr. Unnati Kumar',
			institute:'MBBS, MD - Physiology',
			address:'111-A/45, Ashok Nagar, Kanpur, Uttar Pradesh 208012',
			phone:'0512 255 5479',
			cost:'500/- at clinic',
			time:''			
		}];
		const kanpurTherapist2=[{
			name:'Dr Alok Bajpai',
			institute:'Education - MBBS, MD-Psychiatry',
			address:'A-2, Sarvodaya Nagar, Kanpur, Uttar Pradesh - 208005',
			phone:'0512 308 1111',
			cost:'600/- at clinic',
			time:''			
		},{
			name:'Dr. Nasir Mahmood Khan',
			institute:'Education - MBBS, MD-Psychiatry',
			address:'Near Geet Hotel Mall Road, Mall Road, Kanpur, Uttar Pradesh 208004',
			phone:'095549 04778',
			cost:'300/- at clinic',
			time:''			
		},{
			name:'Dr. Manish Nigam',
			institute:'MBBS, Diploma in Psychological Medicine, Fellowship in Sexual Medicine, 22 Years Experience',
			address:'186, M Block, Landmark: Opposite To K K Degree College, Kanpur',
			phone:'094150 41225, 0512 264 1180',
			cost:'300/- at clinic',
			time:''			
		}];
		return(
			<div>
				<h2 style={team}>We have found Some Psychologists in Kanpur</h2>
				<Grid container columns={4}>
					<Therapist person={kanpurTherapist1}/>
					<Therapist person={kanpurTherapist2}/>	
					<b>Disclamer:</b>Howdybuddy is not presonally or professionally associated with any psychologist, psychiatrists clinics or mental health hospitals listed under the section 'Help Near You'.				
				</Grid>
			</div>
		);
	}
}