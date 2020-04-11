import React from 'react'
import {Link} from 'react-router-dom'

export default function Note(){

    return(
        <div className='note'>
            <div className='banny'>
                <h1>Who is a counselor?</h1>
                <div></div>
                <p>Counselor is someone who derives joy in helping people get over their worries, making
                    people realizes their dreams and make them go after it, putting a smile on people face, 
                    giving hope to those who has completely lost hope, making people realizes God loves them 
                    regardless of their tribe, religion, race, sins, mistakes, making people see fun in life.
                     
                </p>
                <h3>Sign up now and join the team!!!</h3>
                <Link to="/signup" className="btn-primary" >
                     Voiceout
               </Link> 
               <p> </p>
                <p>God will not stop to put smile on your face as you have chosen to put smile on people face too.</p>
            </div>
        </div>
    )
}