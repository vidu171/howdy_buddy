import React from 'react';
import Therapist from './Therapist';
import { Grid } from 'semantic-ui-react';

const team={
	textAlign:'center'
}

export default class Pune extends React.Component{
	
	render(){
		const puneTherapist1=[{
			name:'Dr.Natasha Dcruz counseling and Therapy',
			institute:'Psychological Counselling and Expressive Therapy Psychometric Assessment',
			address:'',
			phone:'+91 (98223) 45165',
			cost:'Rs.1000',
			time:'info@natashadcruz.com'			
		},{
			name:'Niramay Healing',
			institute:'Hypnotherapist, Homeopathic Consulting and Counselling',
			address:'',
			phone:'+91 20 6522 2424',
			cost:'Rs.500',
			time:'dr.sohani@hotmail.com'			
		},{
			name:'Mind Management Institute',
			institute:'Stress Management Program, Anger Management Program, Personality development',
			address:'',
			phone:'(+91) 9130930300',
			cost:'Rs.500',
			time:'mindmi@gmail.com'
		},{
			name:'Peace Of Mind Holistic Health Services',
			institute:'',
			address:'Regus Level II, Connaught Place, Bund Garden Road, Pune 411001',
			phone:'7507009464',
			cost:'',
			time:'peaceofmindhhs@gmail.com'			
		}];
		const puneTherapist2=[{
			name:'Doss Clinic',
			institute:'',
			address:'MJM Hospital , 1202/2 Ghole Road, Opposite Mayor Bungalow Shivajinagar, Pune 411004',
			phone:'9011100010',
			cost:'Rs.750',
			time:''			
		},{
			name:'Dr. Manish Bajpayee Clinic',
			institute:'Psychiatry',
			address:'',
			phone:'9970314487 / 7028024487',
			cost:'Rs.1500',
			time:'talktome@manishbajpayee.com'			
		},{
			name:'Trimiti Clinic',
			institute:'Comprehensive Child Psychology Services',
			address:'',
			phone:'7722044644',
			cost:'Rs.750',
			time:''			
		},{
			name:'Pathfinder Clinic',
			institute:'Health in mind, Child and Adolescent Psychiatry',
			address:'',
			phone:'+91-20-66069676',
			cost:'Rs.400 to Rs.700',
			time:''			
		}];
		const puneTherapist3=[{
			name:'Dr Seema Darodes',
			institute:'Child and family guidance centre/IICP',
			address:'',
			phone:'+91 2065005311',
			cost:'Rs.4600',
			time:''	
		}];
		return(
			<div>
				<h2 style={team}>We have found Some Psychologists in Mumbai</h2>
				<Grid container columns={4}>
					<Therapist person={puneTherapist1}/>
					<Therapist person={puneTherapist2}/>
					<Therapist person={puneTherapist3}/>
					<b>Disclamer:</b>Howdybuddy is not presonally or professionally associated with any psychologist, psychiatrists clinics or mental health hospitals listed under the section 'Help Near You'.
				</Grid>
			</div>
		);
	}
}