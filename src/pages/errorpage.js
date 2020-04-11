import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/banner'
import happy from '../Img/happy.jpg'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'


let styles = { 
    backgroundImage: `url(${happy})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 700 
  }
export default function Errors(){

    return(
        <>
        <Navbar />
        <Hero hero={styles}>
        <Banner title='404' subtitle='page not found'>
            <Link to='/' className='btn-primary'>return home</Link>
        </Banner>
        </Hero>
        </>
       
    )
}