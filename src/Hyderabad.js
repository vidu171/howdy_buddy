import React from 'react';
import Therapist from './Therapist';
import { Grid } from 'semantic-ui-react';
 
const team={
  textAlign:'center'
}

export default class Hyderabad extends React.Component{
  
  render(){
    const hyderabadTherapist1=[{
      name:'Ms. AarathiSelvan',
      institute:'',
      address:'',
      phone:'+91 40395 62920',
      cost:'Rs. 1500',
      time:'10:00 AM - 5:00 PM'     
    },{
      name:"Vasavi's Psychological Clinic",
      institute:'',
      address:'',
      phone:'+91 40395 63846',
      cost:' Rs. 1000',
      time:'MON - SUN: 10:00 AM - 1:00 PM, 5:00 PM - 8:00 PM'     
    },{
      name:'OMNI Hospitals',
      institute:'',
      address:'',
      phone:'+91 40334 63472',
      cost:'Rs 400-500/',
      time:'MON - SUN: 12:00 AM - 11:59 PM'     
    },{
      name:'Dr. Chetan Raj',
      institute:'',
      address:'',
      phone:'',
      cost:'Free consultation',
      time:'Mon - Wed, Fri - Sun: 11:00 AM - 1:00 PM'     
    }];
    const hyderabadTherapist2=[{
      name:'Ms. Raisa Luther',
      institute:'',
      address:'',
      phone:'+91 40395 65364 (Ext: 823)',
      cost:'Rs. 750',
      time:'Mon - Sat: 11:00 AM - 1:00 PM, 3:00 PM - 7:00 PM'     
    },{
      name:'Ms. Sujatha Raman',
      institute:'',
      address:'',
      phone:'+91 40395 64947 ( Extension: 038)',
      cost:'Rs.800/-',
      time:''     
    },{
      name:'Family Counselling',
      institute:'',
      address:'',
      phone:'+91 40395 64106',
      cost:'Rs 1000/-',
      time:'MON - FRI: 9:30 AM - 1:30, PM 5:30 PM - 7:30 PM, SAT - SUN: 10:30 AM - 1:00 PM'
    },{
      name:'Dr. S. V. Prasad',
      institute:'',
      address:'',
      phone:'+91 40395 63020 ( Extension: 234)',
      cost:'Rs 1000/-',
      time:''     
    }];
    const hyderabadTherapist3=[{
      name:'Dr. SharmilaMajumdar',
      institute:'',
      address:'',
      phone:'+91 40395 62887 ( Extension: 988)',
      cost:'Rs.2500/-',
      time:'Tue: 6:30 PM - 9:30 PM' 
    },{
      name:'Dr. VasaviSamyuktaSunki',
      institute:'',
      address:'',
      phone:'+91 40395 63847',
      cost:'Rs 1000/-',
      time:'Mon - Sun: 5:30 PM - 8:00 PM'     
    },{
      name:'Mr. GoggiSrikanth',
      institute:'',
      address:'',
      phone:'+91 40395 64036 ( Extension: 458)',
      cost:'Rs 1500/-',
      time:'Mon - Sun: 6:00 PM - 8:00 PM'     
    },{
      name:'Ms. Sandhya Luther',
      institute:'',
      address:'',
      phone:'+91 40395 65364 (Ext: 827)',
      cost:'Rs 900/-',
      time:'Mon - Thu: 11:00 AM - 8:00 PM Fri - Sun: 11:00 AM - 7:00 PM'     
    }];
    const hyderabadTherapist4=[{
      name:'Mr. Riju Raj Roy',
      institute:'',
      address:'',
      phone:'+91 40395 65364 (Ext: 828)',
      cost:'Rs.750/-',
      time:'Mon, Wed, Fri - Sat: 10:00 AM - 5:30 PM Tue, Thu: 11:00 AM - 7:30 PM' 
    },{
      name:'Dr. JagadeeshBabu',
      institute:'',
      address:'',
      phone:'+91 40395 62887 (Ext: 181)',
      cost:'Rs 500/-',
      time:'Mon - Fri: 10:00 AM - 1:00 PM 6:00 PM - 9:30 PM Sat - Sun: 10:00 AM - 9:30 PM'     
    },{
      name:'Mr. Rahul Luther',
      institute:'',
      address:'',
      phone:'+91 40395 65364 (Ext: 825)',
      cost:'Rs 750/-',
      time:'Mon - Sat: 10:00 AM - 11:00 AM 4:00 PM - 6:30 PM Sun: 10:00 AM - 1:00 PM'     
    },{
      name:'Hope Trust',
      institute:'',
      address:'',
      phone:'+91 40395 65364 ( Extension: 822)',
      cost:'Rs 750/-',
      time:'MON - SUN: 12:00 AM - 11:59 PM'     
    }];
    const hyderabadTherapist5=[{
      name:'Hegde Hospital',
      institute:'',
      address:'',
      phone:'+91 40395 65364 ( Extension: 203)',
      cost:'Rs.500/-',
      time:'MON - SUN: 12:00 AM - 11:59 PM' 
    },{
      name:'Ms. PurviChottai',
      institute:'',
      address:'',
      phone:'+91 40395 65364 (Ext: 826)',
      cost:'Free consultation',
      time:'Mon - Sat: 2:30 PM - 5:30 PM'     
    },{
      name:'Ms. RichaKhetawat',
      institute:'',
      address:'',
      phone:'+91 40395 64107',
      cost:'Rs 1000/-',
      time:'Mon - Fri: 9:30 AM - 1:30 PM, 5:30 PM - 7:30 PM, Sat - Sun: 10:30 AM - 1:00 PM'     
    }];
    return(
		<div>
			<h2 style={team}>We have found Some Psychologists in Hyderabad</h2>
			<Grid container columns={4}>
			  <Therapist person={hyderabadTherapist1}/>
			  <Therapist person={hyderabadTherapist2}/>
			  <Therapist person={hyderabadTherapist3}/>
			  <Therapist person={hyderabadTherapist4}/>
			  <Therapist person={hyderabadTherapist5}/>
        <b>Disclamer:</b>Howdybuddy is not presonally or professionally associated with any psychologist, psychiatrists clinics or mental health hospitals listed under the section 'Help Near You'.
			</Grid>
		</div>
    );
  }
}