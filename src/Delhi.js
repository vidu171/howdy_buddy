import React from 'react';
import Therapist from './Therapist';
import { Grid } from 'semantic-ui-react';

const team={
	textAlign:'center'
}

export default class Delhi extends React.Component{
	
	render(){
		const delhiTherapist1=[{
			name:'Vishwas Healing Centre',
			institute:'Marriage Counselling, Marital Problems',
			address:'Tilak Nagar, Delhi, ',
			phone:'08022227444',
			cost:'Rs.1000',
			time:'Tue-Sat, 11AM-7PM'			
		},{
			name:'PsyCare',
			institute:'Addiction, Depression',
			address:'Jasola, Delhi',
			phone:'',
			cost:'Rs.1500 - 2500',
			time:'12:00 AM-11:59 PM'			
		},{
			name:'Dr. Rajiv Sharma',
			institute:'MBBS, MD-Psychiatry, Psychiatrist',
			address:'Janak Puri, Delhi',
			phone:'',
			cost:'Rs.1500',
			time:'Mon-Sun, 10 AM-6 PM'			
		},{
			name:'Dr.Sunil Mittal',
			institute:'MBBS, MD - Psychiatry, Psychiatrist',
			address:'Preet Vihar, Delhi',
			phone:'',
			cost:'Rs.2000',
			time:'Mon-Sun, 10 AM-6 PM'			
		}];
		const delhiTherapist2=[{
			name:'Dr. Shwetank Bansal',
			institute:'MBBS, MD - Psychiatry, PDO(Michigan), CCBT(Pennsylvania, USA), Psychiatrist',
			address:'Patel Nagar West, Delhi',
			phone:'',
			cost:'Rs.1500',
			time:'Mon-Sun, 10 AM-6 PM'			
		},{
			name:'Dr. Mehak Nagpal',
			institute:'MBBS, MD - Psychiatry, Fellowship in Sexual Medicine, Psychiatrist',
			address:'Greater Kailash Part 2, Delhi',
			phone:'',
			cost:'Rs.1200',
			time:'Mon-Sun, 10 AM-5 PM'			
		},{
			name:'Dr. Sudeshna Biswas',
			institute:'MBBS, DPM (Psychiatry), Psychiatrist',
			address:'CR Park, Delhi',
			phone:'',
			cost:'Rs.1500-Rs.2500',
			time:'Mon-Sun, 10 AM-6 PM'			
		},{
			name:'Dr. Sheikh Abdul Basir',
			institute:'MBBS, DPM(Psychiatry), Psychiatrist',
			address:'Jasola, Delhi',
			phone:'',
			cost:'Rs.1500',
			time:'Mon-Sun, 10 AM-6 PM'			
		}];
		const delhiTherapist3=[{
			name:'Dr. Anjali Nagpal',
			institute:'MBBS, MD - Psychiatry, Psychiatrist',
			address:'Vasant Kunj, Delhi',
			phone:'',
			cost:'Rs.1600',
			time:'Mon-Sun, 10 AM-5 PM'	
		}];
		return(
			<div>
				<h2 style={team}>We have found Some Psychologists in Delhi</h2>
				<Grid container columns={4}>
					<Therapist person={delhiTherapist1}/>
					<Therapist person={delhiTherapist2}/>
					<Therapist person={delhiTherapist3}/>
					<b>Disclamer:</b>Howdybuddy is not presonally or professionally associated with any psychologist, psychiatrists clinics or mental health hospitals listed under the section 'Help Near You'.
				</Grid>
			</div>
		);
	}
}