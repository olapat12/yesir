import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/homepage'
 import Errors from './pages/errorpage'
 import Signup from './pages/signup'
 import Signupp from './pages/signupp'
import Login from './pages/loginpage'
import Voiceout from './pages/voiceout'
import Contactus from './pages/contactus'
 //import Navbar from './components/Navbar'
 import About from './pages/about'
 import Settings from './pages/settings'
 import axios from 'axios'
 import Counselor from './pages/counselor'
 import Protected from './components/protected'
 import Profile from './pages/profile'
 import Welcome from './pages/welcome'
 
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      conselors: [],
      users:{},
    }
    // this.passUser = this.passUser.bind(this)
  }

//   componentDidMount(){


//     axios.get('http://localhost:5000/api/helper/list')
//     .then((response)=>{
//         this.setState({counselors: response.data})
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }
// componentWillUnmount(){
  
// }

// passUser(response){
//   this.props.history.push('/counselor')
// }

render(){
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/voiceout" component={Voiceout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signupp" component={Signupp} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile"  component={Profile} />
        <Route exact path="/welcome" component={Welcome}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path = "/counselor" component={Counselor} />
        <Route component={Errors} />
        </Switch>
        </Router>
    </>
);
}
  
}

export default App;
