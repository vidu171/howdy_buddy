import React from 'react';
import { Grid } from 'semantic-ui-react';
import SlideShow from './SlideShow';

const border={
	border:'solid black 4px',
	height: 'auto',
    width: '80%'
}
const center={
	textAlign:'center',
	fontFamily:'georgia',
	fontSize: '25px'
}

export default class Homepage extends React.Component{
	render() {
		return(
			<div>
				<div style={center}>
					<Grid container columns={4}>
						<Grid.Row>
							<Grid.Column mobile={16} tablet={16} computer={16}>
								<SlideShow style={border}/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<p><strong>Our Aim</strong> : HowdyBuddy is an initial startup by people whose observation of the world in which every other person is going through some internal dilemma and mental issues and various other problems has given them the vision to construct a platform which can succour everyone. This website provides a wide range of unique online services and products to help people individually tackle their issues. People face a lot of psychological complications but they don’t know whom to approach for help in a country like India where going to a psychologist is still not accepted. The perspective for the website is to give people a more approachable source for any kind of psychological problem
						“Outside the fatality of death, everything, joy or happiness, is liberty”
					</p> 
				</div>
			</div>
		);
	}
}






		