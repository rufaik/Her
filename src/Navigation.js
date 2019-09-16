import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css'
import LogoHeader from './Logo header'


class Navigation extends Component{


	constructor(){

		super()
		this.state = {

			showLogo:false

		}
	}

	componentDidMount(){

		if(this.props.showLogo){
			
			this.setState({
				showLogo:this.props.showLogo
			})
		}
	}


	getLogo(){

		if(this.state.showLogo==true){
			return(
				<LogoHeader size={100}/>
			)
		} 
		else{
			return null
		}

		

	}

	render(){
	return (
		
		<nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
			
			<div>
				{this.getLogo()}
			</div>

			<div style = {{flexGrow: '1'}} />

			<div>
				<Link  to="/Contact">
					<h3 className='f3 link dim pt1 underline mr5 pointer'>  Contact Us </h3>
				</Link>
			</div>
		</nav>
	);
	}
}

export default Navigation;