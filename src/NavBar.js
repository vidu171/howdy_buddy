import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import HomePage from './HomePage';
import Agra from './Agra';
import Bangalore from './Bangalore';
import Delhi from './Delhi';
import Kanpur from './Kanpur';
import Lucknow from './Lucknow';
import Mumbai from './Mumbai';
import Pune from './Pune';
import Hyderabad from './Hyderabad';
import Jaipur from './Jaipur';
import Blogs from './Blogs';
import TalkToOurSpecialist from './TalkToOurSpecialist';

const style={
	padding:'20px',
	paddingTop:'0px'
}
const img={
	marginLeft:'20px',
    paddingTop:'8px',
    paddingBottom:'8px',
    width:'50%',
    height:'auto'
}
const color={
	backgroundColor:'#ff8484',
	fontFamily: 'georgia',
	fontSize: '24px',
    padding: '8px'
}
	
export default class NavBar extends React.Component {
	render() {
		return (
			<div>
				Howdy Buddy
				{/* <div style={img}>
					<img src='http://i65.tinypic.com/2eq42o8.jpg' alt='Logo' style={img}/>
				</div> */}
				<Router>
					<div style={style}>
						<Menu style={color} stackable>
							<Link to="/"><p className="item">Home</p></Link>
							<Link to="/TalkToOurSpecialist"><p className="item">Our Specialist</p></Link>
							<div className="ui simple dropdown item">
								Help Near You
								<i className="dropdown icon"></i>
								<Menu>
									<Link to="/Agra"><p className="item">Agra</p></Link>
									<Link to="/Bangalore"><p className="item">Bangalore</p></Link>
									<Link to="/Delhi"><p className="item">Delhi</p></Link>
									<Link to="/Kanpur"><p className="item">Kanpur</p></Link>
									<Link to="/Lucknow"><p className="item">Lucknow</p></Link>
									<Link to="/Mumbai"><p className="item">Mumbai</p></Link>
									<Link to="/Pune"><p className="item">Pune</p></Link>
									<Link to="/Hyderabad"><p className="item">Hyderabad</p></Link>
									<Link to="/Jaipur"><p className="item">Jaipur</p></Link>
								</Menu>
							</div>
							<Link to="/Blogs"><p className="item">Blogs</p></Link>
							<Link to="/AboutUs"><p className="item">Our Team</p></Link>
							<Link to="/ContactUs"><p className="item">Contact Us</p></Link>
						</Menu>
						<hr/>
						<Route exact path="/" component={HomePage}/>
						<Route path="/Blogs" component={Blogs}/>
						<Route path="/Agra" component={Agra}/>
						<Route path="/Bangalore" component={Bangalore}/>
						<Route path="/Delhi" component={Delhi}/>
						<Route path="/Kanpur" component={Kanpur}/>
						<Route path="/Lucknow" component={Lucknow}/>
						<Route path="/Mumbai" component={Mumbai}/>
						<Route path="/Pune" component={Pune}/>
						<Route path="/Hyderabad" component={Hyderabad}/>
						<Route path="/Jaipur" component={Jaipur}/>
						<Route path="/ContactUs" component={ContactUs}/>
						<Route path="/AboutUs" component={AboutUs}/>
						<Route path="/TalkToOurSpecialist" component={TalkToOurSpecialist}/>
					</div>
				</Router>
			</div>
		);
	}
}