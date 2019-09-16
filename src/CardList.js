import React from 'react';
import Card from './Card'
import {Link} from 'react-router-dom';


const CardList = ({ main }) => {
	return(
		<div>
          		 <Link to="/Curriculum"><Card 
          		 	 
          		  id={main[0].id} name={main[0].name} email={main[0].email}/></Link>

                 <Link to="/About"><Card
        
                  id={main[1].id} name={main[1].name} email={main[1].email}/></Link>
                 <Link to="/Partners"><Card 
                 	
                 id={main[2].id} name={main[2].name} email={main[2].email}/></Link>
              </div>  

		)
}

export default CardList;