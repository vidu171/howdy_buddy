import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Specialist from './Specialist';

const team={
	textAlign:'center'
}

export default class TalkToOurSpecialist extends React.Component{
	
	render(){
		const specialist1=[{
			name:'Ms PARUL KATHURIA',
			intro:'Ms Parul Kathuria is a PHd in psychology from India and Masters in psychology from UBC Okanagon. She is currently working as a  Mental Health Therapist at Intersect Youth and Family services, Canada . Wherein she provides clinical services such as intake, assessment, treatment and crisis invention, consultation, conducts individual, group and family therapy.',
			special:'Ms. Parul is specialized in dealing with self esteem issues, depression, anxiety/ panic attacks, anger management, conflict resolution, stress management, substance abuse, physical/ sexual abuse, grief/ bereavement, Post traumatic stress disorder, parenting,  relationship issue, family dysfunction issue, child/ youth issues, child trauma , communication issues, spiritual concerns, transition/change.',
		},{
			name:'Ms RADHIKA RADHAKRISHNAN',
			intro:'Radhika Radhakrishnan is a Counseling Psychologist having experience of 3 years in the field of mental health. She is a Graduate in Applied Psychology from Gargi College, Delhi University and Post-graduate is Counseling and Family Therapy from Indira Gandhi Open University.',
			special:'She is a specialist and has undertaken Psychotherapy, Counseling and Family Therapy for varied cases of different age groups related to stress; anxiety disorders; relationship issues; facing difficulty in family; substance abuse; behavioral and emotional issues with children/adolescents; trauma and Career Counseling.',
		},{
			name:'Ms. SHRITICA JOSHI',
			intro:'Ms Shritica Holds Bachelors in psychology Honors from Delhi University and Masters in Counseling psychology from Amity University, Noida. Her prior work experience has been in De addiction clinic and psychiatric hospitals and is comfortable working with adults.',
			special:'She has  dealt with cases from career related issues to Depression and prefer to incorporate solution focused brief counseling and Motivational interviewing with techniques of cognitive behavior therapy, reality therapy and Positive psychotherapeutic approaches to counseling for cases like low self esteem, grief, career related problems, coming out of closet/ transitions,relationship and substance abuse. ',
		}];
		return(
			<div>
				<h2 style={team}>Talk to Our Specialist</h2>
				<Segment inverted textAlign='center' color='blue'>
					YOU CAN BOOK AN ONLINE VIDEO CHAT SESSION  WITH OUR PSYCHOLOGISTS FROM APRIL 20TH
				</Segment>
				<Grid container columns={4}>
					<Specialist person={specialist1}/>
				</Grid>
			</div>
		);
	}
}