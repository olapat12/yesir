import React from 'react'
import '../index.css'
import axios from 'axios'
import { Link, Redirect} from "react-router-dom";
import Navbar from '../components/Navbar'
import {CubeGrid} from 'styled-loaders-react'

import Loading from '../components/Loading'



export default class Signup extends React.Component{

    constructor(props){
        super(props )
        this.state = {

            myresponse: '',

            counselors:[],
            isloading: false,
            
                firstname: '',
                secondname: '',
                surname: '',
                email: '',
                states: '',
                city: '',
                username: '',
                phones: '',
                statuss: '',
                 gender:  '',
                password: ''
            ,
            about: '',

            cpass: '',

            userid: '',

            phone: '',

            emaill: '',

            error: '',

            show: 'none',
            errors: 'none',

        }
         
        
        this.cpass = this.cpass.bind(this)
        this.addCounselor = this.addCounselor.bind(this)
        this.checkUser = this.checkUser.bind(this)
        this.checkPhone = this.checkPhone.bind(this)
        this.checkEmail = this.checkEmail.bind(this)
        
    }

    componentDidMount(){

        document.addEventListener('blur', this.checkUser)
        document.addEventListener('click', this.checkEmail)
        document.addEventListener('change', this.checkPhone)
        document.addEventListener('submit', this.addCounselor)

        axios.get('http://localhost:5000/api/helper/list')
        .then((response)=>{
            this.setState({counselors: response.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

  componentWillUnmount(){
       document.removeEventListener('blur', this.checkUser)
       document.removeEventListener('click', this.checkEmail)
       document.removeEventListener('change', this.checkPhone)
       document.removeEventListener('submit', this.addCounselor)
    }

    addCounselor(e){

        e.preventDefault();
        
        let data = {
                firstname: this.state.firstname,
                surname: this.state.surname,
                email: this.state.email,
                states: this.state.states,
                city: this.state.city,
                username: this.state.username,
                phones: this.state.phones,
                 gender:  this.state.gender,
                password: this.state.password
            ,
            about: this.state.about,
        }

        let options ={
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                     Accept: "application/json",
                     "Content-Type": "application/json",
                     'Access-Control-Allow-Origin': '*'
                     }
        }
        

       return fetch('http://localhost:5000/api/helper/register', options )
       .then((res)=>{
        if(res.status > 300){
            this.setState({errors : 'block', statuss : res.status})
        }
        
        return res.json();
       })
       .then((data)=>{
           console.log(this.state.statuss)
        if(this.state.statuss > 300){
            this.props.history.push('/signup')
        }else{
            localStorage.setItem('username', this.state.username)
            localStorage.setItem('password', this.state.password)
             console.log(data)
            this.props.history.push('/signupp')
        }
    }).catch(err=>console.log(err))
       
 }

checkUser(){

    let options = {

      method: "get"
    
       }

    fetch(`http://localhost:5000/api/helper/checkuser/${this.state.username}`, options)
    .then((res)=>{

        if(res.status >=200  && res.status <300){
            
            this.setState({show: 'block' ,userid: 'username is already taken'})
        }else{
            this.setState({userid: '', show: 'none'})
        }
    })
}

checkEmail(){

    let options = {

      method: "get"
    
       }
       
    fetch(`http://localhost:5000/api/helper/checkemail/${this.state.email}`, options)
    .then((res)=>{
        if(res.status >=200  && res.status <300){
            
            this.setState({show: 'block' ,emaill: 'username is already taken'})
        }else{
            this.setState({emaill: '', show: 'none'})
        }
    })
}

checkPhone(){

    let options = {

      method: "get"
    
       }
       
    fetch(`http://localhost:5000/api/helper/checkphone/${this.state.phones}`, options)
    .then((res)=>{

        if(res.status >=200  && res.status <300){
            
            this.setState({show: 'block' ,phone: 'username is already taken'})
        }else{
            this.setState({phone: '', show: 'none'})
        }
    })
}

    cpass(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
              [name] : value
          })
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
                 
            <form>
                
                <h3>Sign Up and become a member!!!</h3>
    
                <div className="form-group">
                
                 <input type="text" className="form-control" value={this.firstname} 
                       onChange={this.cpass}  name='firstname' placeholder="First name" />
                </div>
    
                    <div className="form-group">
                        
                 <input type="text" className="form-control" placeholder="Surname" 
                    onChange={this.cpass}   value={this.state.surname} name='surname' />
                    </div>
    
                    <div className="form-group">
                      
                <input type="email" className="form-control" value={this.state.email} 
                      onChange={this.cpass} onBlur={this.checkEmail}  name='email'  placeholder="Enter email" />
                      <p style={{display:this.state.show, color: 'red'}}>{this.state.emaill} </p>
                    </div>
                    
    
                    <div className="form-group">
        
             <input type="text" className="form-control"  value={this.state.username} 
                        onChange={this.cpass} onBlur={this.checkUser}  name='username' placeholder="Username" />
                 <p style={{display:this.state.show, color: 'red'}}>{this.state.userid} </p>
                    </div>
    
                    <div className="form-group">
                        
                     <input type="text" className="form-control" value={this.state.phones} 
                        onChange={this.cpass} onBlur={this.checkPhone} name='phones' placeholder="Phone" />
                        <p style={{display:this.state.show, color: 'red'}}>{this.state.phone} </p>
                    </div>
    
                    <div className="form-group">
                        
                        <input type="text" className="form-control" value={this.state.states} 
                        onChange={this.cpass} name='states' placeholder="State" />
                    </div>
    
                    <div className="form-group">
                        
                        <input type="text" className="form-control" value={this.state.city} 
                       onChange={this.cpass}  name='city' placeholder="City" />
                    </div>
    
                    <div>
                        <label>Gender: &nbsp;&nbsp;&nbsp;
                        <label>
                 <input type="radio" value="male"
                         name='gender' onChange={this.cpass} />
                             Male &nbsp;&nbsp;
                        </label>
                        
             <label>
            <input type="radio" value="female" name="gender" onChange={this.cpass}
                  />
                            Female
                        </label>
                        </label>
                        
                    </div>

                    <div style={{display: 'none'}}>
                        <label>City</label>
                  <input type="text" className="form-control" value={this.state.gender} 
                         />
                    </div>

                    
             <div className="form-group">
                
            <textarea className="form-control" onChange={this.cpass} value={this.state.about}
            placeholder="Tell us about yourself" name='about' rows='8' >
                   
                </textarea>
               
            </div>
    
                    <div className="form-group">
                        
              <input type="password" className="form-control" value={this.state.password} 
                       onChange={this.cpass}  name='password' placeholder="Enter password" />
                    </div>
    
                    <div className="form-group">
                       
                        <input type="password" className="form-control" value={this.state.cpass} 
                        onChange={this.cpass} name='cpass' placeholder="Confirm password" />
        
                    </div>
                    <h5 style={{display:this.state.errors, color: 'red', textAlign: 'center', fontStyle: 'italic'}}> 
               Something went wrong,make sure you fill all the fields.</h5>
                    <button onClick={this.addCounselor} 
                    className="btn btn-primary btn-block" >
                     Submit
                    </button>
                   

                    <br/><br/>
                    <p style={{color: 'red', textAlign:'center'}}>{this.state.error} </p>
                    <p className="forgot-password text-right" >
                        Already registered <a href="#">sign in?</a>
                    </p>
              </form>
                </div>
               </div>
               </div>
               </>
        )

    }

    
}