import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

const myForm={
	border:'double black 5px',
	width:'100%',
	height:'auto',
	padding:'20px',
	margin:'0px'
}
const center={
	textAlign:'center'
}

export default class ContactUs extends React.Component{
	render(){
		return(
			<Grid container columns={4}>
				<Grid.Column mobile={16} tablet={16} computer={16}>
					<Card style={myForm}>
						<form className="ui form" method='post'>
							<div className="field">
								<label>Name:</label>
								<input type="text" name="name" placeholder="eg. Steve" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"/>
							</div>
							<div className="field">
								<label>Email:</label>
								<input type="email" name="email" placeholder="eg. Jon@eample.com"/>
							</div>
							<div className="field">
								<label>Message:</label>
								<textarea name="message" placeholder="I would like to say that..." onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"></textarea>
							</div>
							<div style={center}>
								<button className="ui button" type="submit" >Submit</button>
							</div>
						</form>
					</Card>
				</Grid.Column>
			</Grid>
		);
	}
}