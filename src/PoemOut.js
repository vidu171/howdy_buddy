import React from 'react';
import { Button, Image,Icon, Modal, Grid, Card } from 'semantic-ui-react';

const img={
	height:'180px',
	width:'auto'
}
const font={
	fontFamily:"Georgia",
	fontSize:"21px"
}
const center={
	marginLeft:'18%',
	marginRight:'auto',
	display:'block'
}
const right={
	float:'right'
}
const modalImage={
	height:'auto',
	width:'100%',
	
}

export default class PoemOut extends React.Component{
	render(){
		const blogOut=this.props.blog;
		const blogs=blogOut.map((item)=> <MapPoem blog={item}/>);
		return(
			<Grid.Row>
				{blogs}
			</Grid.Row>
		);
	}
}
class MapPoem extends React.Component{
	render(){
		const blog=this.props.blog;
		return(
			<Grid.Column mobile={16} tablet={8} computer={4}>
				<Card>
					<Image src={blog.photo} style={img} size='medium' circular />
					<Card.Content>
						<Card.Header>{blog.title}</Card.Header>
						<p><b>Author:</b>{blog.author}</p>
							<Grid container columns={4}>
								<Grid.Row>
									<Grid.Column mobile={16} tablet={16} computer={16}>
										<Modal trigger={<Button primary>Read More</Button>} closeIcon>
											<Modal.Header>{blog.title}</Modal.Header>
											<Modal.Content image>
												<Grid celled='internally'>
													<Grid.Row style={center}>
														<Grid.Column mobile={16} tablet={16} computer={16}>
															<Image size='large' src={blog.photo} style={modalImage}/>
														</Grid.Column>
													</Grid.Row>
													<Grid.Row>
														<Grid.Column mobile={16} tablet={16} computer={16}>
															<Modal.Description style={font}>
																<p>{blog.para1}</p>
																<br/>
																<p>{blog.para2}</p>
																<br/>
																<p>{blog.para3}</p>
																<br/>
																<p>{blog.para4}</p>
																<br/>
																<p>{blog.para5}</p>
																<br/>
																<p>{blog.para6}</p>
																<br/>
																<p>{blog.para7}</p>
																<br/>
																<b style={right}>-{blog.author}</b>
															</Modal.Description>
														</Grid.Column>
													</Grid.Row>
												</Grid>
											</Modal.Content>
										</Modal>
									</Grid.Column>
								</Grid.Row>
							</Grid>
					</Card.Content>
				</Card>
				
			</Grid.Column>
		);
	}
}