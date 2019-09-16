import React from 'react';
import './Logo.css';
import {Link} from 'react-router-dom';
import LogoHeader from './Logo header'
import './Curriculum.css'
 import Navigation from './Navigation'
 

const Curriculum = () => {
  return (

  	<div>

    	<Navigation showLogo={true}/>
		<div className = ' bracket w-100 w-50-ns tl pr1 pr4-ns pl1 pl4-ns pb4 '>
      		<h6 className = 'tc pa3 f1 f-subheadline-ns mt0'> Our Curriculum </h6>
   	 		<h2 className = "center f4 tc mt0 pl3 pr3" >Our Vision is that every woman would be equipped with the basics of self-care and self-worth from as early as possible. We want young women to start their journey into adolescent equipped and confident when making decisions about their bodies. We do this by covering 3 main topics..</h2>
			<ul>
				<br></br>
				<div style = {{display: 'flex', justifyContent: 'flex-start'}}><h5 className = "two f3 f2-ns "> Her Self-esteem</h5><p className = "mt0 f5 f4-ns mb0 pb0 pa0 h1 pt2 pt3-ns">&nbsp;covers...</p></div>
				<h5 className = "pa4 pt2 pl4">
				<li>Basic Worth - the value that each person possess regardless of their external environment</li>
				<li>Basic Strength - how resilience and discipline play a role in our lives</li>
				<li>Basic Purpose - knowing that every person has a purpose</li>
				</h5><br></br><br></br>

				<div style = {{display: 'flex', justifyContent: 'flex-start'}}><h5 className = "two f3 f2-ns "> Her Bra</h5><p className = "mt0 f5 f4-ns mb0 pb0 pa0 h1 pt2 pt3-ns">&nbsp;covers...</p></div>
				<h5 className = "pa4 pt2 pl4">
				<li>Basic Mechanics - the structure of a bra, why each part is necessary and sizing</li>
				<li>Basic Shopping how-to - how to buy good bra</li>
				<li>Basic Must Haves - what bras are essential and necessary</li>
				</h5><br></br><br></br>

				<div style = {{display: 'flex', justifyContent: 'flex-start'}}><h5 className = "two f3 f2-ns "> Her Period</h5><p className = "mt0 f5 f4-ns mb0 pb0 pa0 h1 pt2 pt3-ns">&nbsp;covers...</p></div>
				<h5 className = "pa4 pt2 pl4">
				<li>Basic Biology - what happens in the body when a woman is on her period</li>
				<li>Basic Hygiene - the increased levels of hygiene that a woman should participate now that her period has begun</li>
				<li>Basic Must-Haves - the importance of pads, tampons and deodorant</li>
				</h5>

    		</ul>
    		<h5 className = "two f2 f1-ns pb2 ">Our Programmes</h5>
				<h2 className = "center f4 tl mt0 pl3 pr3"> Research shows that 80% women are wearing the wrong bra size AND have low self -esteem and 1 in 4 women don't understand their menstrual cycle 

				Our role is to create a foundation for your girls to make informed decisions in the right direction.

				As we understand that every school and project have different needs we have 4 programs which vary in topics and length 
				</h2>
				<div className = "mt0 pt1 pl5 pr">
				<h5><a href="#1"> Programme 1 </a></h5>
				<h5><a href="#2"> Programme 2 </a></h5>
				<h5><a href="#3"> Programme 3 </a></h5>
				<h5><a href="#4"> Programme 4 </a></h5>
				</div>

				<h5 id="1" className = "two pt4"  > Programme 1 </h5>
				<ul className= "pl5">
					<h5>
					<li> Number of participants: 5 - 500 </li>
					<li>Duration: 1 hour</li>
					<li>About:
						The HerBasics package is our most common package, we cover all 3 topics and make sure girls understand the basics on each and are able to make informed decisions. 
						Participants are shown various images such as the mona lisa, a £10 note and a pearl and are asked the value of it leading into an explanation on an individual’s pricelessness. This leads into a video on how pearls and diamonds are made and how pressure creates strength. This section ends with how self-discipline in regards to our thoughts and help students be healtier and happier 
						Next we cover HerBra and Kemi discusses the moment she realised that a bra was not a sexual object to be leered at but part of a woman’s uniform and it could be as pretty or as basic as she desired but it was not meant for others, it was Hers. An interactive poll is take on how many girls feel like they know their bra size. How to choose the right bra is then explained, this leads into Her Period  and another interactive poll is taken to show who think they undersatnd how their period works. A woman’s menstrual cycle is explained and this leads into the final session of Her-Self-esteem which is HerPurpose, here it is explained that every person has a purpose and balance between dreaming big and implementing basic healthy habits into our lives
						The programme ends with a Q&A session.
						Topics covered: HerPeriod, HerBra and HerSelf-esteem.</li> 


					<li>Aims: 
						For every girl (and woman) in the room to understand their period, their bra and have a healthier perspective on themselves
						For every girl (and woman) in the room to leave equipped and empowered to make healthy decisions
						For every girl (and woman) in the room to own and define their femininity in a healthy way </li>
					</h5>
					</ul>

				<h5 id="2" className = "two pt4"  > Programme 2 </h5>
				<ul className= "pl5">
					<h5>
					<li>Number of participants: 5 - 500</li> 
					<li>Duration:  -3 x 1 hour session </li> 
					<li>About: This programme takes time to look at each topic and really build a young person’s self-esteem. Each session is centered around a topic and the room is decorated to fit with theme </li> 
						<ul>
						<li> Session 1: Worth
						Room is decorated with Jewellery and Gems
						Topics covered: Value, the body’s value, being unique
						Tools: Presentation, body image handouts, Barbie presentation - what would she look like if she was real?
						</li> 
						<li>Session 1: Strength
						Room is decorated with Pearls and Stones
						Topics covered: Resilience, Getting up after being knocked down, Changing your bad mood to a good mood
						Tools: Presentation, Pearl and diamond creation video, Joni Eareckson Tada video
						</li> 
						<li>Session 1: Purpose
						Room is decorated with Flowers
						Topics covered: Resilience, Getting up after being knocked down, Changing your bad mood to a good mood
						Tools: Presentation, plants, collage
						</li> 
						</ul>
					<li>Aims: help girls to develop their self esteem, build and establish their confidence, understand their personal value and unlock hidden potential
   					</li> 
				</h5>
				</ul>

				<h5 id="3" className = "two pt4"  > Programme 3 </h5>
				<ul className= "pl5">
					<h5>
					<li>Number of participants: 5 - 500 </li>
					<li>Duration: 1 hour </li>
					<li>About: This session focuses on HerSelf-esteem module teaching the young women about their Worth, Strength and Purpose.
						Participants firstly discuss the value of various objects and then the value and interesting facts about their own body which leads to the conclusion that each person is in fact priceless. A jar of positive affirmations is passed around for them pick one and keep.
						HerStrength highlights emotional intelligence and resilience using a video on pearl and diamond creation. Kemi shares her own experience in not valuing her emotions  and teaches on how to make good decsions when you dont feel like it. 
						Lastly this session ends with HerPurpose invites the participants to dream Big whilst teaching them the value of a seed where it be an idea or a task and how that can grow, this is shown with an interactive example with a plant point.
						The programme ends with a Q&A session.
					</li>
					<li>Aims: help girls to develop their self esteem, build and establish their confidence, understand their personal value and unlock hidden potential
					</li>
					</h5>
				</ul>

				<h5 id="4" className = "two pt4"  > Programme 4 </h5>
				<ul className= "pl5">
					<h5>
					<li>Number of participants: 5 - 500</li>
					<li>Duration: 1 hour</li>
					<li>About: In this programme we take what is taught in the Her Basics and spend more time explaining the value of our bodies and how this relates to HerBra and HerPeriod</li>
					<li>Topics covered: HerBra and HerPeriod</li>
					<li>Tools: Presentation, Bra manufacturing video, menstrual cycle presentation</li>
					</h5>
				</ul>



    </div>
    </div>

    

  );
    };



export default Curriculum;



