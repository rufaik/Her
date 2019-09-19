import React from 'react';
import './Logo.css';
import Navigation from './Navigation'
 

const About = () => {
  return (

  	<div>

    	<Navigation showLogo={true}/>
    	<div className="pt5">
		<div className = ' bracket w-100 w-50-ns tl pr1 pr4-ns pl1 pl4-ns pb4 '>
      		<div className = 'I tc pa4 f1 f-subheadline-ns mt0'> Who We Are</div>

      		<div style = {{ color: 'gray'}} className = "mainBody gray pa4 pb0 tc pt2 pl4">
				
				HerBasics was founded by Kemi Rufai, she has been working with young people since 2014, helping them to realise their potential and walking beside them while they navigate life’s obstacles. She is passionate about equipping young people with the correct tools to make healthy decisions and make sure they have what it takes to stand when life doesn’t play along.

				<br></br>Kemi created HerBasics because she kept having conversations with her young people and women her own age and noticed a gap of knowledge and a pattern of low self-esteem. Frustrated she crafted the curriculum using tools she had learnt from the Shine program, an accredited female empowerment programme and her own experience.

				<div style = {{ width: 'auto'}}className = 'horse tc ml4 mr4 pb4 pa1'>
    
      	</div>
      			<br></br>HerBasics found that many women from the ages of 20- 60 do not have the basic knowledge on how to pick the right bra, what actually happens at that time of the month and what their worth actually is. Our mission is to equip young women everywhere with the basic information on their periods, bras and self-worth so that as they grow they can build on this foundational knowledge make confident and educated decisions on what works for them.

				<br></br>
      			<br></br>The main tools used in the programmes are:
				<br></br><br></br>
				Delivery of assemblies<br></br>
				Videos and interactive activities<br></br>
				Introductions to techniques and brands that will help them after we leave<br></br>
				Complimentary gifts including, discounts for underwear brands, tampons and pads and a handwritten positive affirmation i.e My strength comes from my resilience
				

				<div style = {{ width: 'auto'}}className = 'horse tc ml4 mr4 pb4 pa1'>
    
      	</div>

				<br></br>We would like to invite your young people be a part of the Her Basics programme. It is designed to equip young women with the basic tools as they begin to navigate the challenges that come with adulthood


</div>
    </div>
    </div>
    </div>
    )};



export default About;