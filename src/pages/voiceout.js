import React from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import Title from '../components/Title'
import Pagination from '../components/pagination'



export default class Voiceout extends React.Component{

constructor(){
    super()
    this.state = {
        counselors: [],
        img: '',
        isloading: false,
        sortedRes: [],
        sortedcity: [],
        states: 'all',
        city: 'all',
        gender: 'both',
        search: '',
        message: '',
        currentPage: 1,
        postperPage: 4,

        
    }
    this.cancel = '';
    this.fetchResult = this.fetchResult.bind(this)
    this.getUnique = this.getUnique.bind(this)

}
        
        // this.handlechange = this.handlechange.bind(this)
         
        // this.getUniques = this.getUniques.bind(this)
        // this.getUniquess = this.getUniquess.bind(this)
        // this.filtercounselor = this.filtercounselor.bind(this)
    
        
    componentDidMount(){
         this.setState({isloading: true})
         this.fetchResult()

        }
    

    handlechange = event => {
        const target = event.target;
        const name = event.target.name;
         const value = target.type === 'checkbox' ? target.checked : target.value

         this.setState({
             [name]:value
         }, this.fetchResult)
    }

     getUnique(items,value){
        return[... new Set(items.map(item => item[value]))]
    }

 fetchResult = ()=>{
    //const searchUrl = 'http://localhost:5000/api/helper/list';
    if(this.cancel){
        this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();
    
    axios.get('http://localhost:5000/api/helper/list', {
        CancelToken: this.cancel.token
    })  .then((response)=>{
            
        this.setState(
            {
                counselors: response.data,
                sortedRes:response.data,
                sortedcity: response.data,
                isloading: false
            }
            ) 
            let { counselors, states,city, gender,search } = this.state 
        let tempCounselor = counselors
       // let tempCounselor = this.state.counselors;

        if(states !== 'all'){
            tempCounselor = tempCounselor.filter(user => user.states === states )
            if(tempCounselor.length === 0){
                this.setState({message: 'no match found'})
            }
            else{
                this.setState({message: ''})
            }
        }
        
        if(gender !== 'both'){
            tempCounselor = tempCounselor.filter(user => user.gender === gender )
            if(tempCounselor.length === 0){
                this.setState({message: 'no match found'})
            }
            else{
                this.setState({message: ''})
            }
        }
        if(search !== "" && search){
            tempCounselor = tempCounselor.filter(user => user.username === search )
            if(tempCounselor.length === 0){
                this.setState({message: 'no match found'})
            }
            else{
                this.setState({message: ''})
            }
        }
        // if((city !== 'all' && states !== 'all')){
        //     tempCounselor = tempCounselor.filter(user => user.city === city)
        // }
        this.setState({
            counselors : tempCounselor,
         //   sortedcity: tempCounselor
        })
    })
    .catch((err)=>{
        console.log(err)
    })
 }

 paginate = (pageNumber) =>{
     this.setState({currentPage: pageNumber})
 }

    componentWillUnmount(){
        
    }

    render(){

      //  const paginate = this.paginate()
        let mystate  = this.getUnique(this.state.sortedRes, 'states');
        mystate = ['all',...mystate]

        let mygender  = this.getUnique(this.state.sortedRes, 'gender');
        mygender = ['both',...mygender]

        let mycity = this.getUnique(this.state.sortedcity, 'city');
        mycity = ['all',...mycity]

        let counselors = this.state.counselors
      //  let states = this.state.states
        let tempCounselor = counselors
      
        let {postperPage, currentPage} = this.state

        const indexofloastPost = currentPage * postperPage;
        const indexoffirstPost = indexofloastPost - postperPage;
        const currentPost = tempCounselor.slice(indexoffirstPost, indexofloastPost)
        localStorage.setItem('user', JSON.stringify(mystate))
        localStorage.setItem('gender', JSON.stringify(mygender))
        localStorage.setItem('usercity', JSON.stringify(mycity))
       
     let users = JSON.parse(localStorage.getItem('user'));
     let gender = JSON.parse(localStorage.getItem('gender'));
     let usercity = JSON.parse(localStorage.getItem('usercity'));
    // console.log(users[0])
      
        users = users.map((user, index)=>{
       return<option value={user} key={index}>{user}</option>
       })

       gender = gender.map((user, index)=>{
        return<option value={user} key={index}>{user}</option>
        })

       usercity = usercity.map((user, index)=>{
        return<option value={user} key={index}>{user}</option>
        })
      

        if(this.state.isloading){
            return(
                <Loading />
           
            )
        }
       
        return(
            <>
            <Navbar />
            <section className='filter-container'>
            <Title title='Search counselor'/>
            <div className="filter-forms">
               <label>Search:  <input type="text" name='search' onChange={this.handlechange} 
               className="form-controls" placeholder="Username" /> {this.state.message}</label>
              
           </div>
            <form className='filter-form'>
                
                <div className='form-group'>
                    <label htmlFor='states'>Sort by State:</label>
           <select name='states' id='states' value={this.state.states} 
                  onChange={this.handlechange}  className='form-control' > 
                {users}
            </select>
                </div>
              
                <div className='form-group'>
                    <label htmlFor='type'>Gender</label>
                    <select name='gender' id='type' value={this.state.gender} 
                  onChange={this.handlechange}  
                    className='form-control' >
                    {gender}
                             
                </select>
                </div>
              
            </form>
        </section>
            <section className='services'>
               
                <div className='services-center'>
                    {currentPost.map((user,index)=>{
                        return <article key={user._id} className='services'>
                            <span><img src={`http://localhost:5000/${user.profilePic}`} alt="" /></span>
                            <h3>{user.firstname} {user.surname} </h3>
                            <p>{user.phones} </p>
                            <p>{user.email} </p>
                            <p>{user.states} </p>
                            <p>{user.city} </p>
                            <p>{user.about} </p>
                            
                        </article>
                    })}
                </div>
            </section>
            <div className="filter-forms">
               <label> {this.state.message}</label>
              
           </div>
            <Pagination postsperPage={postperPage} totalPost={tempCounselor.length} paginate={this.paginate} />
            </>
        )
        
    }
}