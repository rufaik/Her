import React, {Component} from 'react';
import './Logo header.css';
import hers from './NEW.png' 
import {Link} from 'react-router-dom';



class Logo extends Component{

	constructor(){

		super()
		this.state = {

			size:400

		}
	}

	componentDidMount(){

		if(this.props.size){

			this.setState({
				size:this.props.size
			})
		}

	}


	render(){
		return (
	    
	    <div className = 'form ma2 pt3 pa3'>
	      
	      <Link to="/Home"><img  alt ='logo' src={hers} style={{ width: this.state.size }}/></Link>

	    </div>

	  );
	}
}



export default Logo;



