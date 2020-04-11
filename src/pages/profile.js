import React from 'react'
//import {getUser, getJwt} from './jwt'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {CubeGrid} from 'styled-loaders-react'
import Navbar from '../components/extrabar'

export default class Profile extends React.Component{
constructor(props){
    super(props)
    this.state = {
        user: {},
        isLoading: true,
        img: ''
    }
    this.Signout = this.Signout.bind(this)
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

return fetch('http://localhost:5000/api/helper/login', options )
.then(response => {

    if(response.status > 300){
      
       this.props.history.push('/login')
    }
    return response.json();
    
}).then((data)=>{
   
    this.setState(
        {
        user: data.payload, 
        isLoading: false,
        img:`http://localhost:5000/${data.payload.profilePic}`
    })
   // console.log(this.state.user)
    
}).catch(err =>{
    console.log(err)
})
}

Signout(){
    localStorage.removeItem('username')
    localStorage.removeItem('password')
     localStorage.removeItem('authToken')
     localStorage.removeItem('user')
     this.props.history.push('/login')
}
componentWillUnmount(){

}
    render(){

        return(
            <>
            <Navbar Signout={this.Signout} />
            <div>
                <br/>
                <br/>
                {this.state.isLoading && <div className='aps'><CubeGrid color='green' /></div>}
                welcome back {this.state.user.username}
               
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3><Link to='/profile'>Profile</Link></h3>

                    </article>
                    <article className='info'>
                        <h3>Basic Info</h3>
                        <h6>Firstname: {this.state.user.firstname} </h6>
                        <h6>Surname: {this.state.user.surname} </h6>
                        <h6>Username: {this.state.user.username} </h6>
                        <img src={this.state.img} style={{height:300, width:300}} />
                    </article>
                </div>
            </div>
            </>
        )
    }
}