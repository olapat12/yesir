import React from 'react'
import {getJwt} from './jwt'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


 class Protected extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            user: undefined
        }
    }

    componentDidMount(){

        const jwt = getJwt()
        if(!jwt){
            this.props.history.push('/login')
        }
        //let h =new Headers()
    //     let options ={
    //         method: 'get',
    //        // body: JSON.stringify(data),
    //         headers: {
    //                  Accept: "application/json",
    //                  "Content-Type": "application/json",
    //                  'Access-Control-Allow-Origin': '*',
    //                  "Authorization": `Bearer ${jwt}`
    //                  }
    //     };
    //    // this.setState({isloading: true})

    //      fetch('http://localhost:5000/api/home', options )
    //     .then(response => {

    //         if(response.status > 300){
    //            // this.setState({error: 'block', isloading: false})
    //          localStorage.removeItem('username')
    //         localStorage.removeItem('password')
    //          localStorage.removeItem('authToken')
    //          localStorage.removeItem('user')
    //          console.log(response)
    //         this.props.history.push('/login')
    //         }
    //        // return response.json();
    //      }).catch(err=>{
    //          console.log(err)
    //      })
        
        // axios.get('http://localhost:5000/api/home' ,{headers:{Authorization: `Bearer ${jwt}`}})
        // .then((res) => {
        //    // this.setState({user: res.data})
        //     console.log(res.status)
        // })
        // .catch(err =>{
        //     localStorage.removeItem('username')
        //     localStorage.removeItem('password')
        //      localStorage.removeItem('authToken')
        //      localStorage.removeItem('user')
        //     this.props.history.push('/login')
        // })
    }
    componentWillUnmount(){
        
    }
    render(){
        // if(this.state.user ===undefined){
        //     return(
        //         <h1>loading....</h1>
        //     )
        // }
       return(
       <div> </div>
       )
    }
}

export default withRouter(Protected)