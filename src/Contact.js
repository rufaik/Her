import React from 'react';
import './App.css';
import ThankYou from './ThankYou'
import {Link} from 'react-router-dom';
import Navigation from './Navigation'


const Contact = () => {
	return (
		<div>
		 <Navigation showLogo={true}/>
		 <div>
				<article className="br3 bg-white ba b--black-10 mv1 w-100 w-50-m w-25-l shadow-5 center">
					<main className="pa4 pb0 black-80">
		  <form className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className=" two f1 fw6 ph0 mh0">Contact Us</legend>
		      <div className="mt1">
		        <label className="db fw6 lh-copy f6" for="name">Name</label>
		        <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
		      </div>
		       <div className="mt2">
		        <label className="db fw6 lh-copy f6" for="name"> School/Company Name</label>
		        <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
		      </div>
		       <div className="mt2">
		        <label className="db fw6 lh-copy f6" for="name">Postcode</label>
		        <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
		      </div>
		      <div className="mt2">
		        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
		        <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mv2">
		        <label className="db fw6 lh-copy f6" for="number">Contact Number</label>
		        <input className="b pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="number"  id="number"/>
		      </div>
		      <div className="mv2">
		        <label className="db fw6 lh-copy f6" for="text">Programme you're interested in</label>
		        <input className="b pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100 " type="text" name="text"  id="number"/>
		      </div>
		       <div className="mv2">
		        <label className="db fw6 lh-copy f6" for="text">Message</label>
		        <textarea rows="4" className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100 " type="text" name="text"  id="number"></textarea>
		      </div>

		    </fieldset>
		    <div className="">
		      <Link to="/ThankYou"> <input
		     
		       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		       type="submit" 
		       value="Submit"/></Link>
		    </div>
		   <div className="lh-copy mt3">
		       <Link to="/Me"><h4 className="f6 link dim underline pointer db">Return Home</h4></Link>
		     
		    </div>
		  </form>
		</main>
		</article>
				</div>
				</div>
			);
}

export default Contact;