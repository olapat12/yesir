import React from 'react'
import Signup from './signup'
import Login from './loginpage'
import Voiceout from './voiceout'
import Error from './errorpage'
import Contactus from './contactus'
import Hero from '../components/Hero'
import Banner from '../components/banner'
import lonely from '../Img/dep1.jpg'
import depressed from '../Img/depp.jpg'
import abused from '../Img/dep.jpg'
import maltreat from '../Img/maltreat.jpg'
import drug from '../Img/drug.jpg'
import heart from '../Img/hhh.jpg'
import calm from '../Img/calm.jpg'
import abuse from '../Img/abus.jpg'
import Tip from '../components/tip'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Goodlife from '../components/goodlife'
import Note from '../components/note'
import Header from '../components/header'
import {BrowserRouter as Router, Route, Link, Swtich} from 'react-router-dom'
import axios from 'axios'

let styles = { 
  backgroundImage: `url(${lonely})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 660
}
let tit ="Do you feel Lonely?"



export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      counselors: [],
      currentCount: 7,
       
    }
  }
  timer() {
    
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if(this.state.currentCount == 6){
      styles = { 
        backgroundImage: `url(${abused})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 660,
      }
      tit="Are you depressed?"
      }
    else if(this.state.currentCount == 5){
      styles = { 
        backgroundImage: `url(${depressed})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 660
      }
      tit = "Are you sad?"
    }
   else if(this.state.currentCount == 4){
       styles = { 
        backgroundImage: `url(${calm})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 660
      }
      tit = "Are you frustrated?"
    }
    else if(this.state.currentCount == 3){
       styles = { 
        backgroundImage: `url(${heart})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 660
      }
      tit = "Are you heart broken?"
    }
    else if(this.state.currentCount == 2){
       styles = { 
        backgroundImage: `url(${drug})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 660
      }
      tit = "Are you addicted to drug?"
    }
    else if(this.state.currentCount == 1){
        styles = { 
        backgroundImage: `url(${maltreat})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 660
      }
      tit = "Are you being maltreated?"
    }
    else if(this.state.currentCount == 0){
      styles = { 
      backgroundImage: `url(${abuse})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'noRepeat',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 660
    }
    tit = "Are you being abused?"
  }
    else{
      this.setState({
        currentCount: 7
      })
      styles = { 
        backgroundImage: `url(${lonely})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 660
      }
      tit = "Do you feel lonely"
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 3500);
    axios.get('http://localhost:5000/api/helper/list')
    .then((response)=>{
        this.setState({counselors: response.data})
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  componentWillUnmount(){
   // clearInterval(this.intervalId);
  }

    render(){

      return(
        
        <>
        <Navbar />
         <Header hero='default'>
        <Banner title='Life is beautiful' subtitle='life is short make every second count'
                click="Are you tired of life? do you feel like giving up? Are you worried about something?
                Do you feel empty?" >
                  <br/>
                <p>I want you to know that you are bigger and stronger than whatever you are going, pain 
                  doesn't last forever. We are here to make your life beautiful again
                </p>
                <p>We believed that a problem shared is half solved, click on Voiceout to pour out 
                  your mind to a counselor today and loose yourself from that bondage.
                </p>
        </Banner>
        </Header>
        <Services />
        <Hero hero={styles}>
        <Banner title={tit} subtitle="Do you need someone to talk to?"
                click="click on voiceout to talk to someone now" >
          <Link to="/voiceout" className="btn-primary" >
            Voiceout
          </Link>
        </Banner>
        </Hero>
        <Note/>
        
        <Goodlife/>
        <Tip/>
        <Footer/>
        </>
        
        
      )
    }
  
}


