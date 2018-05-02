import React from 'react';
import Therapist from './Therapist';
import { Grid } from 'semantic-ui-react';
 
const team={
	textAlign:'center'
}

export default class Lucknow extends React.Component{
	
	render(){
		const lucknowTherapist1=[{
			name:'Mr. Rajesh Chandra Pandey',
			institute:'Education: M.Phil-Psychology, Certificate in Hypnoplu, MA-Psychology',
			address:'A-911/11 Indira Nagar, Lucknow, Uttar Pradesh 226016',
			phone:'094524 63690',
			cost:'Rs.500/- at clinic',
			time:''			
		},{
			name:'Dr. Kavita Dhingra',
			institute:'Education: Masters in Clinical Psychology, Ph.D in Psychology',
			address:'C1-B, SBI Colony, Rama Hospital Lane, Gayatri Puram, Kalyanpur, Lucknow, UP',
			phone:'092356 91635',
			cost:'Rs.300/- online',
			time:''			
		},{
			name:'Dr. Deepak Nandvanshi',
			institute:'Education: Ph.D Psychology, M.A.-Clinical Psychology',
			address:'',
			phone:'092356 91635',
			cost:'Rs 500/- at clinic',
			time:''			
		},{
			name:'Dr. Namrata Singh',
			institute:'Education: M.Sc.-Applied Psychology',
			address:'A-911/11, Indira Nagar, Lucknow, Uttar Pradesh, 226016, Landmark : Meena Market, Lucknow',
			phone:'093691 60546',
			cost:'Rs 500/- at clinic',
			time:''			
		}];
		const lucknowTherapist2=[{
			name:'Dr. Atul Verma',
			institute:'Education: M.Phil - Clinical Psychology',
			address:'C-5/243, Vikas Khand Rd, Vikas Khand, Gomti Nagar, Lucknow 226010, Uttar Pradesh',
			phone:'098993 75790',
			cost:'Rs.1000/- at clinic',
			time:''			
		},{
			name:'Dr. Anjali Gupta',
			institute:'Education: Masters in Psychology, M.PHIL in Medical & Social Psychology, PhD - Psychology',
			address:'86 Balmiki Marg, Lalbagh, Lucknow, Uttar Pradesh 226001',
			phone:'0522 400 5174',
			cost:'Rs.300/- online',
			time:''			
		},{
			name:'Ms. Juhi Parashar',
			institute:'Education: BA-MA-Psychology',
			address:'14/899, Main Road, Sector 10, Near Rani Lakshmi Bai School, Indira Nagar, Lucknow, Uttar Pradesh 226016',
			phone:'099365 88999',
			cost:'Rs 400/- online',
			time:''			
		},{
			name:'Dr. Kalpana Yadav',
			institute:'Education: M.Phil, Master in Psychology',
			address:'Shop Number 14,15, Naya Bazar, Sonia Gandhi Nagar, Lucknow Chowk, Lucknow, Uttar Pradesh 226003',
			phone:'09415108439, 09335839534',
			cost:'Rs 400/- online/clinic',
			time:''			
		}];
		const lucknowTherapist3=[{
			name:'Dr. Ashutosh Srivastava',
			institute:'Education: MPHIL (CP), PHD',
			address:'Sector I, Ashiyana, LDA Colony Kanpur Road Lucknow, Uttar Pradesh 226012',
			phone:'0522 242 5544',
			cost:'Rs.200/- online, 1000/- clinic',
			time:''	
		}];
		return(
			<div>
				<h2 style={team}>We have found Some Psychologists in Lucknow</h2>
				<Grid container columns={4}>
					<Therapist person={lucknowTherapist1}/>
					<Therapist person={lucknowTherapist2}/>
					<Therapist person={lucknowTherapist3}/>
					<b>Disclamer:</b>Howdybuddy is not presonally or professionally associated with any psychologist, psychiatrists clinics or mental health hospitals listed under the section 'Help Near You'.
				</Grid>
			</div>
		);
	}
}