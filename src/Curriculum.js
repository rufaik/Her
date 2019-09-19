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
    	<div className="pt5">
		<div className = ' bracket w-100 w-50-ns tl pr1 pr4-ns pl1 pl4-ns pb4 '>
      		<div className = 'I tc pa4 f1 f-subheadline-ns mt0'> Our Curriculum</div>
   	 		<div className = " mainBody center f6 tc mt0 pl3 pr3" >Our Vision is that every woman would be equipped with the basics of self-care and self-worth from as early as possible. We want young women to start their journey into adolescent equipped and confident when making decisions about their bodies. We do this by teaching 3 main modules..</div>
			<ul>
				<br></br>
				<div className = "mainBody" style = {{display: 'flex', justifyContent: 'flex-start'}}><div className = "gray f3 f2-ns "> Her Self-esteem</div><div className = "pt2 pt3-ns" >&nbsp;covers...</div></div>
				<div className = "four pa4 pt2 pl4">
				<li>Basic Worth - the value that each person possess regardless of their external environment</li>
				<li>Basic Strength - how resilience and discipline play a role in our lives</li>
				<li>Basic Purpose - knowing that every person has a purpose</li>
				</div><br></br><br></br>

				<div className = "mainBody" style = {{display: 'flex', justifyContent: 'flex-start'}}><div className = "gray f3 f2-ns "> Her Bra</div><div className = "pt2 pt3-ns" >&nbsp;covers...</div></div>
				<div className = "four pa4 pt2 pl4">
				<li>Basic Mechanics - the structure of a bra, why each part is necessary and sizing</li>
				<li>Basic Shopping how-to - how to buy good bra</li>
				<li>Basic Must Haves - what bras are essential and necessary</li>
				</div><br></br><br></br>

				<div className = "mainBody" style = {{display: 'flex', justifyContent: 'flex-start'}}><div className = "gray f3 f2-ns "> Her Period</div><div className = "pt2 pt3-ns" >&nbsp;covers...</div></div>
				<div className = "four pa4 pt2 pl4">
				<li>Basic Biology - what happens in the body when a woman is on her period</li>
				<li>Basic Hygiene - the increased levels of hygiene that a woman should participate now that her period has begun</li>
				<li>Basic Must-Haves - the importance of pads, tampons and deodorant</li>
				</div>

    		</ul>
    		<div className = "mainBody gray f2 f1-ns pb2 " style = {{color: 'gray'}} >Programmes we offer..</div>
				<div className = "mainBody f6 tl mt0 pl3 pr3"> Research shows that 80% women are wearing the wrong bra size AND have low self -esteem and 1 in 4 women don't understand their menstrual cycle 

				Our role is to create a foundation for your girls to make informed decisions in the right direction.

				As we understand that every school and project have different needs we have 4 programs which vary in topics and length 
				</div>
				
				<div style = {{color: 'gray'}} className = "ink tc ma0 pl3 pl2-ns pr3 pr2-ns pt4 pb0">
				<a href="#1"><button className = " mainBody gray" >
				1</button></a>
				
				<a href="#2"><button className = " mainBody gray" >
				2</button></a>

				<a href="#3"><button className = " mainBody gray" >
				3</button></a>

				<a href="#4"><button className = " mainBody gray" >
				4</button></a>
				
				</div>



				<div id="1" style = {{color: 'gray'}} className = "mainBody gray f3 pb3 pt4"  > Programme 1 </div>
				<div className= "four pl4">
				<table>
					  <tr>
					    <td>Number of Participants</td>
					    <td>5-500</td>
					    
					  </tr>
					  <tr>
					    <td>Duration</td>
					    <td>1 hour</td>
					  </tr>
					  <tr>
					    <td>Modules</td>
					    <td>Her Self-esteem, Her Bra, Her Period</td>
					  </tr>
					   <tr>
					    <td>Tools</td>
					    <td>Presentation, Pearl and diamond creation video, short bra manufacturing video, short menstrual cycle presentation</td>
					  </tr>
					  <tr>
					    <td>Aims</td>
					    <td>
					    For every girl (and woman) in the room to understand their period, their bra and have a healthier perspective on themselves
						For every girl (and woman) in the room to leave equipped and empowered to make healthy decisions
						For every girl (and woman) in the room to own and define their femininity in a healthy way
					    </td>
					  </tr>
					  <tr className="no-bottom-border">
					    <td>Course Summary</td>
					    <td>
					    This is our most common programme, we cover all 3 topics and make sure girls understand the basics on each and are able to make informed decisions. 
						Participants are shown various images such as the mona lisa, a £10 note and a pearl and are asked the value of it leading into an explanation on an individual’s pricelessness. This leads into a video on how pearls and diamonds are made and how pressure creates strength. This section ends with how self-discipline in regards to our thoughts and help students be healtier and happier 
						Next we cover HerBra and Kemi discusses the moment she realised that a bra was not a sexual object to be leered at but part of a woman’s uniform and it could be as pretty or as basic as she desired but it was not meant for others, it was Hers. An interactive poll is take on how many girls feel like they know their bra size. How to choose the right bra is then explained, this leads into Her Period  and another interactive poll is taken to show who think they undersatnd how their period works. A woman’s menstrual cycle is explained and this leads into the final session of Her-Self-esteem which is HerPurpose, here it is explained that every person has a purpose and balance between dreaming big and implementing basic healthy habits into our lives
						The programme ends with a Q&A session.
						Topics covered: HerPeriod, HerBra and HerSelf-esteem.

					    </td>
					  </tr>
				</table>
				</div>

				<div id="2" style = {{color: 'gray'}} className = "mainBody gray f3 pb3 pt4"  > Programme 2 </div>
				<div className= "four pl4">
				<table>
					  <tr>
					    <td>Number of Participants</td>
					    <td>5-500</td>
					    
					  </tr>
					  <tr>
					    <td>Duration</td>
					    <td>3 x 1 hour session</td>
					  </tr>
					  <tr>
					    <td>Modules</td>
					    <td>Her Self-esteem, Her Bra, Her Period</td>
					  </tr>
					  <tr>
					    <td>Aims</td>
					    <td>
					    Help girls to develop their self esteem, build and establish their confidence, understand their personal value and unlock hidden potential
   					 </td>
					  </tr>
					  <tr className="no-bottom-border">
					    <td>Course Summary</td>
					    <td >
					    This programme takes time to look at each topic and really build a young person’s self-esteem. Each session is centered around a topic and the room is decorated to fit with theme 
						<ul>
						<li> Session 1: Worth<br></br>
						Room is decorated with Jewellery and Gems<br></br>
						Topics covered: Value, the body’s value, being unique<br></br>
						Tools: Presentation, body image handouts, Barbie presentation - what would she look like if she was real?
						</li> 
						<li>Session 1: Strength<br></br>
						Room is decorated with Pearls and Stones<br></br>
						Topics covered: Resilience, Getting up after being knocked down, Changing your bad mood to a good mood<br></br>
						Tools: Presentation, Pearl and diamond creation video, Joni Eareckson Tada video
						</li> 
						<li>Session 1: Purpose<br></br>
						Room is decorated with Flowers<br></br>
						Topics covered: Resilience, Getting up after being knocked down, Changing your bad mood to a good mood<br></br>
						Tools: Presentation, plants, collage
						</li> 
						</ul>

					    </td>
					  </tr>
				</table>
				</div>

				<div id="3" style = {{color: 'gray'}} className = "mainBody gray f3 pb3 pt4"  > Programme 3 </div>
				<div className= "four pl4">
				<table>
					  <tr>
					    <td>Number of Participants</td>
					    <td>5-500</td>
					    
					  </tr>
					  <tr>
					    <td>Duration</td>
					    <td>1 hour</td>
					  </tr>
					  <tr>
					    <td>Modules</td>
					    <td>Her Self-esteem</td>
					  </tr>
					   <tr>
					    <td>Tools</td>
					    <td>Presentation, Bra manufacturing video, menstrual cycle presentation</td>
					  </tr>
					  <tr>
					    <td>Aims</td>
					    <td>
					    Help girls to develop their self esteem, build and establish their confidence, understand their personal value and unlock hidden potential
					</td>
					  </tr>
					  <tr className="no-bottom-border">
					    <td>Course Summary</td>
					    <td>
					    This session focuses on HerSelf-esteem module teaching the young women about their Worth, Strength and Purpose.
						Participants firstly discuss the value of various objects and then the value and interesting facts about their own body which leads to the conclusion that each person is in fact priceless. A jar of positive affirmations is passed around for them pick one and keep.
						HerStrength highlights emotional intelligence and resilience using a video on pearl and diamond creation. Kemi shares her own experience in not valuing her emotions  and teaches on how to make good decsions when you dont feel like it. 
						Lastly this session ends with HerPurpose invites the participants to dream Big whilst teaching them the value of a seed where it be an idea or a task and how that can grow, this is shown with an interactive example with a plant point.
						The programme ends with a Q&A session.

					    </td>
					  </tr>
				</table>
				</div>

				<div id="4" style = {{color: 'gray'}} className = "mainBody gray f3 pb3 pt4"  > Programme 4 </div>
				<div className= "four pl4">
				<table>
					  <tr>
					    <td>Number of Participants</td>
					    <td>5-500</td>
					    
					  </tr>
					  <tr>
					    <td>Duration</td>
					    <td>1 hour</td>
					  </tr>
					  <tr>
					    <td>Modules</td>
					    <td>Her Bra, Her Period</td>
					  </tr>
					  <tr>
					    <td>Tools</td>
					    <td>Presentation, Bra manufacturing video, menstrual cycle presentation</td>
					  </tr>
					  <tr>
					    <td>Aims</td>
					    <td>
					    Help girls to have a clear and correct understanding on the ins and out of their period and bra.
					</td>
					  </tr>
					  <tr className="no-bottom-border">
					    <td>Course Summary</td>
					    <td>
					    In this programme we take what is taught in the Her Basics and spend more time explaining the value of our bodies and how this relates to HerBra and HerPeriod
					
					    </td>
					  </tr>
				</table>
				</div>




    </div>
    </div>
    </div>

    

  );
    };



export default Curriculum;



