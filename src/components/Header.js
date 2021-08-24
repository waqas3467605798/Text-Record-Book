import react, {Component} from 'react'
import '../App.css';
import firebase from './Fire'
import {Link} from 'react-router-dom'

  class Header extends Component{
      constructor(){
          super();
          this.state = {
            user:null,
            userEmail:null
            
          }
      }


      componentDidMount(){
        var userId = firebase.auth().currentUser.uid;
        var userEmail = firebase.auth().currentUser.email
        
        this.setState({user:userId,userEmail:userEmail})
      }
     


  render(){
    
    return (
    
    
    <div>
    
      <div id='div1'> 
      Text Record Book
      </div>

      <div id='div2'>
     <Link to='/' style={{textDecoration:'none', marginRight:'22px'}} > <b>Intro/Logout</b> </Link>
     <Link to='/RecordBook' style={{textDecoration:'none', marginRight:'22px'}} > Text-Record </Link>
    
      </div>
     
    </div>
  );
}
}

export default Header;
