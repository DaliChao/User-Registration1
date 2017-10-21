import React,{Component} from 'react';
import {connect} from 'react-redux';

class CurrentUsers extends Component{
  render(){
    return(
      <div style={{padding:40}}>
        <h3>Current User</h3>
        <ol>
          {this.props.users.all.map(
            (user,index)=>{
              return <li key={index}>{user.username}</li>
            }
          )}
        </ol>
      </div>
    )
  }
}

const stateToProps=(state)=>{
   return{
     users:state.user
   }
}

export default connect(stateToProps)(CurrentUsers);
