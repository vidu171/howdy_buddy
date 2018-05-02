import React from 'react';
import TeamMember from './TeamMember';
import { Grid } from 'semantic-ui-react';

const team={
	textAlign:'center'
}

export default class AboutUs extends React.Component{
	
	render(){
		const row1=[{
			name:'Neha Kangralkar',
			post:'Founder',
			photo:'http://i66.tinypic.com/25p5rht.jpg'
		},{
			name:"Elton D'Souza",
			post:'Advisor',
			photo:'http://i65.tinypic.com/2112iw2.jpg'
		},{
			name:'Kakul Hai',
			post:'Advisor and Mentor',
			photo:'http://i63.tinypic.com/2qu80ag.jpg'
		},{
			name:"Tanushree Bhargava",
			post:'Advisor',
			photo:'http://i67.tinypic.com/2vhyseg.jpg'
		}];
		const row2=[{
			name:"Shivang Sarat",
			post:'Technical Head',
			photo:'http://i65.tinypic.com/j6l5c8.jpg'
		},{
			name:'Omkar Kulkarni',
			post:'Web Developer',
			photo:'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/22195757_870821783094461_877817218490464735_n.jpg?_nc_cat=0&oh=57f8559ae91e29e329fc50c1b2925799&oe=5B2968BF'
		},{
			name:'Shlok Gupta',
			post:'Market Research and Analysis',
			photo:'http://i65.tinypic.com/xe0lqs.jpg'
		},{
			name:'Fiza Khurana',
			post:'Content Writer',
			photo:'http://i68.tinypic.com/35mjgvl.jpg'
		}];
		const row3=[{
			name:'Riddhi Jain',
			post:'Market Research and Analysis',
			photo:'http://i67.tinypic.com/27yv1w8.jpg'
		},{
			name:'Aman Jain',
			post:'Web Developer',
			photo:'http://i63.tinypic.com/6yh2t2.jpg'
		},{
			name:'Shivam Gungarde',
			post:'Market Research and Analysis',
			photo:'http://i68.tinypic.com/2wd6grc.jpg'
		},{
			name:'Chinmay Gaur',
			post:'Market Research and Analysis',
			photo:'http://i65.tinypic.com/2cr7zbo.jpg'
		}];
		const row4=[{
			name:'Niranjay Bhosale',
			post:'Market Research and Analysis',
			photo:'http://i63.tinypic.com/dww55e.jpg'
		},{
			name:'Hari Sreekar',
			post:'Graphic Designer',
			photo:'http://i67.tinypic.com/1qfjue.png'
		},{
			name:'Arnav Kaushal',
			post:'Content Writer',
			photo:'http://i68.tinypic.com/1z23swk.png'
		}];
		return(
			<div>
				<h2 style={team}>Our Team</h2>
				<Grid container columns={4}>
					<TeamMember person={row1}/>
					<TeamMember person={row2}/>
					<TeamMember person={row3}/>
					<TeamMember person={row4}/>
				</Grid>
			</div>
		);
	}
}