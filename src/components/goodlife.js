import React from 'react'
import rain from '../Img/rain.jpg'
import child from '../Img/child.jpg'
import happy from '../Img/happy.jpg'
import back from '../Img/back.jpg'
import love from '../Img/love1.jpg'
import oldlove from '../Img/love.jpg'
import Hero from '../components/Hero'


let styles = { 
    backgroundImage: `url(${love})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 700
  }
  let tit ="Life is wonderful?"

export default class Goodlife extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
          
          currentCount: 5,
           
        }
      }
      timer() {
        
        this.setState({
          currentCount: this.state.currentCount - 1
        })
        if(this.state.currentCount == 4){
          styles = { 
            backgroundImage: `url(${back})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 700,
          }
          tit="Life is Good"
          }
        else if(this.state.currentCount == 3){
          styles = { 
            backgroundImage: `url(${rain})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 700
          }
          tit = "Life is sweet"
        }
       else if(this.state.currentCount == 2){
           styles = { 
            backgroundImage: `url(${child})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 700
          }
          tit = "Life is short"
        }
        else if(this.state.currentCount == 1){
            styles = { 
             backgroundImage: `url(${oldlove})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'noRepeat',
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             minHeight: 700
           }
           tit = "Life is love"
         }
        else if(this.state.currentCount == 0){
           styles = { 
            backgroundImage: `url(${happy})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 700
          }
          tit = "Life is once"
        }
       
        else{
          this.setState({
            currentCount: 4
          })
          styles = { 
            backgroundImage: `url(${love})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 700
          }
          tit = "Life is wonderful"
        }
      }
      componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 3500);
      }
      componentWillUnmount(){
        
     }

    render(){
        
        return(
            <>
            <Hero hero={styles}>
             <div className="banner">
                <h1>{tit}</h1>
                <div></div>
                <h4>Stay happy. Enjoy every moment. Do whatever makes you happy. Be thankful To God</h4>
                <p>The only person you need to impress is you.</p>
              </div>
            </Hero>
            </>
        )
    }
}