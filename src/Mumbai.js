import React from 'react';
import Therapist from './Therapist';
import { Grid } from 'semantic-ui-react';

const team={
	textAlign:'center'
}

export default class Mumbai extends React.Component{
	
	render(){
		const mumbaiTherapist1=[{
			name:'Dr.Pavan Sonar',
			institute:'Consultant Psychiatrist, Psychosexual Consultant and Counsellor',
			address:'For Appointment',
			phone:'SMS on: 9833840141',
			cost:'Rs.3000',
			time:''			
		},{
			name:'Dr. Keerti Sachdeva (PhD)',
			institute:'Educational Psychologist, Child Behavior Therapist',
			address:'Shop Number 4, Om Heera Panna Mall, Mumbai',
			phone:'',
			cost:'Rs.1000',
			time:'10AM - 3PM'			
		},{
			name:'Medical Centre',
			institute:'Hypnosis Therapy',
			address:'SMC Medical Center, At Link corner mall, Off Linking Rd., Bandra west, Mumbai',
			phone:'9821488699',
			cost:'1500',
			time:'www.myminstitute.com'
		},{
			name:'Space Counseling and Assessment',
			institute:'Recently consulted for: Anger Management',
			address:'Inner Space Counseling Center, Chincholi Bunder, Mumbai',
			phone:'',
			cost:'Rs.2000',
			time:'09:00 AM - 08:00 PM'			
		}];
		const mumbaiTherapist2=[{
			name:'Mrs. Chhaya Jain',
			institute:'Psychologist, M.Sc - Applied Psychology, Advanced Diploma In Counselling Psychology',
			address:'Sion Poly Clinic, Sion, Mumbai, Consulted for Psychotherapy, Anxiety Attacks, Anxiety',
			phone:'',
			cost:'Rs.600',
			time:''			
		},{
			name:'Dr. Sanjoy Mukerji',
			institute:'Psychologist, Ph. D - Alternative Medicine, PG Diploma in Psycological Counseling',
			address:' Borivali East, Mumbai, Recently consulted for: OCD, Mood Disorder Treatment, Stress Treatment',
			phone:'',
			cost:'Rs.2500 at clinic',
			time:''			
		},{
			name:'Ms. Dipal Mehta',
			institute:'Psychologist, MA - Clinical Psychology, P.G. Diploma in Guidance and Counseling, BA In Psychology',
			address:'V Care Polyclinic, Santacruz West, Mumbai',
			phone:'',
			cost:'Rs.2500 at clinic',
			time:''			
		},{
			name:'Dr. Keerti Sachdeva',
			institute:'Psychologist, Ph.D-Child Psychology, M.Phil. Educational Psychology, MSc. Child Psychology',
			address:'Andheri West, Mumbai',
			phone:'Recently consulted for: Depression, Mood Disorder Treatment, Anxiety',
			cost:'Rs.1000 at clinic',
			time:''			
		}];
		const mumbaiTherapist3=[{
			name:'Ms. Kunjal Shah',
			institute:'Psychologist, M.Sc - Psychology, MS Psychotherapy and Counseling',
			address:'Inner Space Counseling Center Chincholi Bunder',
			phone:'Recently consulted for: Anger Management, Adult Counselling',
			cost:'Rs.1840 at clinic',
			time:''	
		}];
		return(
			<div>
				<h2 style={team}>We have found Some Psychologists in Mumbai</h2>
				<Grid container columns={4}>
					<Therapist person={mumbaiTherapist1}/>
					<Therapist person={mumbaiTherapist2}/>
					<Therapist person={mumbaiTherapist3}/>
					<b>Disclamer:</b>Howdybuddy is not presonally or professionally associated with any psychologist, psychiatrists clinics or mental health hospitals listed under the section 'Help Near You'.
				</Grid>
			</div>
		);
	}
}