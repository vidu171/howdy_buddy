import React from 'react';
import { Slide } from 'react-slideshow-image';

const adjust={
	width:'auto',
	height:'auto',
	textAlign:'center',
	border:'solid black 4px',

}

const images = [
  'http://i63.tinypic.com/nmkugh.jpg',
  'http://i67.tinypic.com/1z6ujt.jpg',
  'http://i68.tinypic.com/33duvlj.jpg',
  'http://i63.tinypic.com/d4gf7.jpg'
];

export default class SlideShow extends React.Component{
	render(){
		return(
			<div style={adjust}>
				<Slide images={images} duration={5000} transitionDuration={1000} />
			</div>
		);
	}
}
