import React from 'react'
import Title from '../components/Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends React.Component{

    state={services:[
     {
        // icon:<FaCocktail/>,
        title:'Sad',
        info:'Life is too beautiful, take a moment to enjoy all the good things life has to offer. Remember pain is temporary '
    },
    {
       // icon:<FaHiking/>,
        title:'Worried',
        info:'Life is too short to worry about anything, learn to free your mind and let tomorrow worry about itself. Remember tomorrow is not promised for anyone, just enjoy the moment. '
    },
    {
        //icon:<FaShuttleVan/>,
        title:'Depressed',
        info:'Take a moment to thank God for all he has done for you and do not focus on what he has not done for you, God loves you. Always try to move on from the past and do not worry about tomorrow. '
    },
    {
       // icon:<FaBeer/>,
        title: 'Frustrated',
        info:'Learn to train your mind to be calm in every situation you find yourself, never take a decision when you are angry because you will definitely regret it. Always remember one thing, you can not undo a mistake but you can correct and also learn from it '
    },
    ]
  }

    render(){
        return(
            <section className='services'>
                <Title title='Why are you?' />
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='services'>
                            <h3>{item.title} </h3>
                            <p>{item.info} </p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
