import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'


export default class Signupp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: 'none',
            pic: '',
            username: '',
           
            selectedFile: null,
            about: '',
            user: {}
         }

        this.fileChooser = this.fileChooser.bind(this)
        this.addCounselor = this.addCounselor.bind(this)
    }
    componentDidMount(){

        var username = localStorage.getItem('username');
        var password = localStorage.getItem('password')
      
      let data = {
          username: username,
          password: password
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
      
       fetch('http://localhost:5000/api/helper/login', options )
      .then(response => {
      
          if(response.status > 300){
            
             this.props.history.push('/signup')
          }
          return response.json();
          
      }).then((data)=>{
         
          this.setState(
              {
              user: data.payload, 
              isLoading: false, 
          })
         // console.log(this.state.user)
          
      }).catch(err =>{
          console.log(err)
      })
      }

  componentWillUnmount(){
       document.removeEventListener('submit', this.addCounselor)
    }

     fileChooser = (event)=>{
        
        this.setState({selectedFile: event.target.files[0]})
         console.log(event.target.files[0])
       //  console.log(this.state.profilePic)
    }

    addCounselor(e){
        e.preventDefault();
       const fd = new FormData()
       fd.append('profilePic', this.state.selectedFile, this.state.selectedFile.name)
       axios.put(`http://localhost:5000/api/helper/updates/${this.state.user.id}`,fd)
        .then(res =>{
            
        }).then((data)=>{
            this.props.history.push('/welcome')
        })
        .catch(err=>console.log(err))
    }
   
    render(){

        // let counselors = this.state.counselors.map((counselor)=>{

        //    // const {username} = this.props.location
        //    // console.log(username)
        //     //console.log(counselor)
        //     return(
        //         <div>
                    
        //         </div>
        //     )
        // })

        return(
            <>
            <Navbar/>
            <div className='aside'>
            <div className="auth-wrapper">
             <div className="auth-inner">
            <form enctype="multipart/form-data">
              <h3>You are almost done</h3>
              <div style={{height: 300, width: 300, display:this.state.show }}>
                  <img src={this.state.pic} className='pic' />
              </div>
            <div className="form-group">
                <label>Add a profile picture</label>
                <input type="file" onChange={this.fileChooser} />
            </div>
         <button type="submit" onClick={this.addCounselor} className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>
            </div>
            </div>   
            </>
        )
        
        }

    
}