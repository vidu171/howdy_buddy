import React from 'react';
import { Grid } from 'semantic-ui-react';
import Therapist from './Therapist';

const team={
	textAlign:'center'
}

export default class Agra extends React.Component{
	
	render(){
		const jaipurTherapist1=[{
			name:'Ms. Sunita Panday',
			institute:'M. S. in Psychotherapy and Counselling, Psychologist',
			address:'Mansarovar, Jaipur',
			phone:'Recently consulted for: Marriage Counselling, Behaviour and Thought Problems, Counselling and Stress Management, 11 Years experience',
			cost:'₹750 at clinic',
			time:'10:00 AM - 06:00 PM'			
		},{
			name:'Dr. Urmil Bishnoi',
			institute:'Ph.D Psychology, M.Phil - Psychology, Psychologist',
			address:'C-Scheme, Jaipur',
			phone:'',
			cost:'₹ 500 at clinic',
			time:''			
		},{
			name:'Ms. Stuti Pardhe',
			institute:'MSW, Certificate in Clinical Psychopharmacology, Certificate in Neuro-Linguistic Programming',
			address:'Jagatpura, Jaipur',
			phone:'',
			cost:'₹550 at clinic',
			time:''			
		},{
			name:'Dr.Pramod Bhardwaj',
			institute:'MBBS, DPM, Psychologist',
			address:'Ashok Marg, Jaipur',
			phone:'',
			cost:'₹200  at clinic',
			time:''			
		}];
		const jaipurTherapist2=[{
			name:'Dr.Shaily Singh Agrawal',
			institute:'Ph.D, MA psychology, PGDCG',
			address:'Udaan Counselling,Flat 904, the grand residency, near rangoli gardens, vaishalinagar Jaipur',
			phone:'9 Years experience',
			cost:'₹500 at clinic',
			time:''			
		},{
			name:'Dr.Gunjan Khatri',
			institute:'M.Phil Clinical Psychology, Psychologist',
			address:'Psyche Help, Rajapark, Jaipur',
			phone:'2 Years experience',
			cost:'₹500 at clinic',
			time:''			
		},{
			name:'Dr.Kavita Bhargava',
			institute:'Doctor of Philosophy (PhD), Integrated Clinical Hypnotherapist, Pursuing Transpersonal Regression Therapy',
			address:'KPsych Services,Geetansh Class of Pearl, SL Marg, Jaipur',
			phone:'3 Years experience',
			cost:'₹500 at clinic',
			time:''			
		},{
			name:'Ms. Tanya Tripathi',
			institute:'M.Phil - Psychology, M.Sc Clinical Psychology',
			address:'Pratap Nagar, Jaipur',
			phone:'4 Years experience',
			cost:'₹500 at clinic',
			time:''			
		}];
		const jaipurTherapist3=[{
			name:'Dr Vikas Thanvi(Psychiatrist)',
			institute:'',
			address:'B-49, Vashishth Marg, Shyam Nagar, Jaipur, Rajasthan 302019',
			phone:'098281 16573',
			cost:'',
			time:'10AM – 2pm , 5pm – 7PM'			
		},{
			name:'Dr. SS Thambi',
			institute:'Psychiatrist',
			address:'C 55, Lal Kothi, Janpath, Lal Kothi, Jaipur, Rajasthan 302015',
			phone:'0141 274 1770',
			cost:'Kindly call to Enquire costs.',
			time:''			
		}];
		return(
			<div>
				<h2 style={team}>We have found Some Psychologists in Agra</h2>
				<Grid container columns={4}>
					<Therapist person={jaipurTherapist1}/>
					<Therapist person={jaipurTherapist2}/>
					<Therapist person={jaipurTherapist3}/>
					<b>Disclamer:</b>Howdybuddy is not presonally or professionally associated with any psychologist, psychiatrists clinics or mental health hospitals listed under the section 'Help Near You'.
				</Grid>
			</div>
		);
	}
}