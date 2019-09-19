import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import Navigation from './Navigation'


const Contact = () => {
	return (
		<div>
		<Navigation />
		<div>
				<article className="br3 bg-white ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 center">
					<main className="pa4 black-80">
		  <form className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f1 fw6 ph0 mh0">Thank You!</legend>
		     

		    </fieldset>
		    
		   <div className="lh-copy mt3">
		      <Link to="/Home"><h3 className="f6 link dim underline pointer db">Return Home</h3></Link>
		     
		    </div>
		  </form>
		</main>
		</article>
				</div>
				</div>
			);
}

export default Contact;