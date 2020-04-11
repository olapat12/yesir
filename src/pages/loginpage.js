import React from 'react'
import '../index.css'
import axios from 'axios'
import {CubeGrid} from 'styled-loaders-react'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'


export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            username: '',
            password: '',
            error: 'none',
            counselors:[],
            user: {},
            isloading: false
        }
        this.cpass = this.cpass.bind(this)
        this.submitLogin = this.submitLogin.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/helper/list')
        .then((response)=>{
            this.setState({counselors: response.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    cpass(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
              [name] : value
          })
    }

    submitLogin(e){
        e.preventDefault()

        let data = {
            username: this.state.username,
            password: this.state.password
        }

        let options ={
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                     Accept: "application/json",
                     "Content-Type": "application/json",
                     'Access-Control-Allow-Origin': '*',
                    // "Authorization": "auth-token"
                     }
        };
        this.setState({isloading: true})

        return fetch('http://localhost:5000/api/helper/login', options )
        .then(response => {

            if(response.status > 300){
                this.setState({error: 'block', isloading: false})
            }
            return response.json();
            

        }).then((data)=>{
           
            this.setState({user: data.payload})
           localStorage.setItem('user', JSON.stringify(data.payload))
           localStorage.setItem('authToken', data.authToken)
           localStorage.setItem('username', this.state.username)
           localStorage.setItem('password', this.state.password)
         
           this.props.history.push('/welcome')
        }).catch(err =>{
            console.log(err)
        })
        
    }

    componentWillUnmount(){
        
    }
    render(){
        if(this.state.isloading){
            return(
                <Loading />
           
            )
        }
        return(
            <>
            <Navbar />
            <div className='aside'>
           <div className="auth-wrapper">
            <div className="auth-inner">
           <form onSubmit={this.submitLogin}>
               
           
            
           <div className="form-group">
               <label>Email username</label>
               <input type="text" name='username' onChange={this.cpass} 
               className="form-control" placeholder="Enter email or username" />
           </div>
   
           <div className="form-group">
               <label>Password</label>
               <input type="password" name='password' onChange={this.cpass} 
               className="form-control" placeholder="Enter password" />
           </div>
   
           <div className="form-group">
               <div className="custom-control custom-checkbox">
                   <input type="checkbox" className="custom-control-input" id="customCheck1" />
                   <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                   <h5 style={{display:this.state.error, color: 'red', textAlign: 'center', fontStyle: 'italic'}}> 
                   Username and password do not match</h5>
               </div>
           </div>
           <button type="submit" className="btn btn-primary btn-block">Submit</button>
                   <p className="forgot-password text-right">
                       Forgot <a href="#">password?</a>
                   </p>
               </form>
               </div>
              </div>
              </div>
              </>
       )

    }
}