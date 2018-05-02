import React from 'react';
import { Grid } from 'semantic-ui-react';
import Therapist from './Therapist';

const team={
	textAlign:'center'
}

export default class Bangalore extends React.Component{
	
	render(){
		const bangaloreTherapist1=[{
			name:'Ms. Supriya Shanker',
			institute:'M.pHil - Clinical Psychology, Clinical Psychologist 33 years experience',
			address:'274, 8th Main Road, 15th Cross, Wilson Garden, Bengaluru, Karnataka',
			phone:'080 2222 7444',
			cost:'₹800 for regular consultation',
			time:''			
		},{
			name:'Dr. Yesheswini Kamaraju',
			institute:'MD - Child and Adolescent Psychiatry, 14 years of experience',
			address:'63, Splendid Plaza 3rd Floor, 5th Block, 100 Feet Road, Koramangala',
			phone:' 099020 75544',
			cost:'₹ 1,000 for regular consultation',
			time:''			
		},{
			name:'Dr. Kalgudi Mallikarjuna',
			institute:'MBBS, Diploma in Psychological Medicine, Highly Experienced ',
			address:'174/B, 3rd Main, 4th Block, Esi Hospital Road, Rajajinagar',
			phone:'080 2330 5932',
			cost:'₹500 for regular consultation',
			time:''			
		},{
			name:'Dr. Safiya M.S',
			institute:'MS-Psychotherapy, MBBS & DIP, Psychiatrist 9 years experience',
			address:'493, 1st Floor, Mohnish Complex, F Block, 60 Feet Road',
			phone:'099007 50017',
			cost:'₹750 for regular consultation',
			time:''			
		}];
		const bangaloreTherapist2=[{
			name:'Dr. Sudhir Hebbar',
			institute:'MBBS, MD - Psychiatry, Psychotherapist 23 years experience',
			address:'704, Arvind Avenue Road. Landmark: Lakshminarayana Pura',
			phone:'098451 33229',
			cost:'₹800 for regular consultation',
			time:''			
		},{
			name:'Dr. B. Kapur',
			institute:'MBBS, MD - Psychiatry, Psychiatrist 41 years experience',
			address:' Hebbal-Columbia Asia Hospital, Kirloskar Business Park, Bellary Road',
			phone:'08025426469',
			cost:'₹500 for regular consultation',
			time:''			
		},{
			name:'Dr. G S Palaksha',
			institute:'MBBS, Diploma in Psychological Medicine, Psychiatrist 46 years experience',
			address:'802, 6th Cross, 10th Main, Near Kaveri School, Bangalore, Karnataka',
			phone:'08066084042',
			cost:'₹400 for regular consultation',
			time:''			
		},{
			name:'Dr. K.M. Druva Kumar',
			institute:'Psychiatrist & Psychiatry',
			address:'Bishop Cotton Complex, 15, Residency Road, Residency Road, Bangalore, Karnataka',
			phone:'08022215775',
			cost:'₹700 for regular consultation',
			time:''			
		}];
		const bangaloreTherapist3=[{
			name:'Mr. Nitin Mehra',
			institute:'Masters In Psychology, 7 years experience',
			address:'65/1, Raksha Foundation, Muniyellapa Building, Choodasandra Circle, Sarjapura Road Cross',
			phone:'09741899116',
			cost:'₹1000 for regular consultation',
			time:''	
		},{
			name:'Mr. Nitin Mehra',
			institute:'',
			address:'',
			phone:'+918033923574 (Ext: 376).',
			cost:'₹ 1000',
			time:'Mon - Fri: 9:00 AM - 12:00 PM, 5:00 PM - 8:00 PM, Sat - Sun: 9:00 AM - 12:00 PM, 6:00 PM - 8:00 PM'			
		},{
			name:'Harmony Wellness Concepts',
			institute:'',
			address:'',
			phone:'+91 80339 23327 ( Extension: 724)',
			cost:'₹ 1000',
			time:'8:00 AM - 9:00 AM'
		},{
			name:'Progressive Milestones',
			institute:'',
			address:'',
			phone:'080 – 41429841',
			cost:'₹ 800',
			time:'MON - SAT: 10:00 AM - 7:00 PM'
		}];
		const bangaloreTherapist4=[{
			name:'Cadabams Hospitals',
			institute:'',
			address:'',
			phone:'+91 80711 08418',
			cost:'₹ 500-850',
			time:'Open 24 x 7'	
		},{
			name:'Medisex Foundation',
			institute:'',
			address:'',
			phone:'',
			cost:'₹ 1500-2000',
			time:'MON - SAT: 11:00 AM - 7:00 PM'
		},{
			name:'Mind & Brain Clinic',
			institute:'',
			address:'',
			phone:'+91 80393 45828',
			cost:'₹ 750',
			time:'MON - SUN: 8:00 AM - 9:00 PM'
		},{
			name:'Beyond Randomness',
			institute:'',
			address:'',
			phone:'+91 80393 45351 ( Extension: 045)',
			cost:'₹ 800',
			time:'MON - SUN: 8:00 AM - 4:30 PM, 6:00 PM - 9:30 PM'
		}];
		const bangaloreTherapist5=[{
			name:'Kalpari Art and Mind',
			institute:'',
			address:'',
			phone:'+91 80306 56536 ( Extension: 262)',
			cost:'₹ 1000',
			time:'MON - SAT: 9:00 AM - 8:00 PM, SUN: 10:00 AM - 2:00 PM'
		},{
			name:'Gayatri Psychology Clinic',
			institute:'',
			address:'',
			phone:'+91 80393 45351 ( Extension: 395)',
			cost:'₹ 1500',
			time:'MON - SAT: 9:00 AM - 10:00 PM'
		},{
			name:'Swapreran - Psychological Counselling and Wellness Clinic',
			institute:'',
			address:'',
			phone:'+91 80393 45185',
			cost:'₹ 1500',
			time:'MON - SUN: 11:00 AM - 7:00 PM'
		},{
			name:'Seraniti',
			institute:'',
			address:'',
			phone:'+91 80393 45119 ( Extension: 624)',
			cost:'₹ 2000-3000',
			time:'MON - SAT: 9:00 AM - 8:00 PM'
		}];
		const bangaloreTherapist6=[{
			name:'About InnerSight Counselling & Training Centre LLP',
			institute:'',
			address:'',
			phone:'+91 80306 56648 ( Extension: 673)',
			cost:'₹ 1200',
			time:'MON - SAT: 10:00 AM - 9:00 PM, SUN: 2:00 PM - 7:00 PM'
		},{
			name:'Dr. Renu E George (PhD)',
			institute:'',
			address:'',
			phone:'99 0106 1713',
			cost:'₹ 500-900',
			time:'Call to enquire.'
		}];
		return(
			<div>
				<h2 style={team}>We have found Some Psychologists in Bangalore</h2>
				<Grid container columns={4}>
					<Therapist person={bangaloreTherapist1}/>
					<Therapist person={bangaloreTherapist2}/>
					<Therapist person={bangaloreTherapist3}/>
					<Therapist person={bangaloreTherapist4}/>
					<Therapist person={bangaloreTherapist5}/>
					<Therapist person={bangaloreTherapist6}/>
					<b>Disclamer:</b>Howdybuddy is not presonally or professionally associated with any psychologist, psychiatrists clinics or mental health hospitals listed under the section 'Help Near You'.
				</Grid>
			</div>
		);
	}
}