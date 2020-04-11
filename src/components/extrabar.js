import React from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {CubeGrid} from 'styled-loaders-react'

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isOpen: false,
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(){
        this.setState({isOpen:!this.state.isOpen})
    }
   
    render(){
       
        return(
            <div className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                    
                        <Link to='/welcome'>
                            <img src={logo} alt='Beach Resort' />
                        </Link>
                        <button type='submit' className='nav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to='/welcome'>Home</Link>
                        </li>
                        <li>
                            <Link to='/profile'>profile</Link>
                        </li>
                        <li>
                            <Link to='/settings'>Settings</Link>
                        </li>
                        <li>
                        <button type="submit" className="btn btn-primaryy btn-block"
                         onClick={this.props.Signout}> SignOut</button>
                        </li>
                       
                    </ul>
                </div>
            </div>
        )
   
}
}

export default Navbar