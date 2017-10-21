import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../actions';

class Users extends Component{
	constructor(){
		super();
		this.state={
			username:'',
			password:''
		}
	}

	textOnchange(field,event){
		//console.log(field+':'+event.target.value);
		if(field=='username'){
			this.setState({
				username:event.target.value
			});
		}else if(field=="password"){
			this.setState({
				password:event.target.value
			});
		}
	}

  addUser(){
		const user={
			username:this.state.username,
			password:this.state.password
		}
		console.log("Add User:"+JSON.stringify(user));
		this.props.createUser(user);
	}

	render(){
		console.log('render!!');
		return(
			<div style={{padding:40}}>
				<input type="text" placeholder="username" onChange={this.textOnchange.bind(this,'username')}/><br/>
				<input type="password" placeholder="password" onChange={this.textOnchange.bind(this,'password')}/><br/>
				<button onClick={this.addUser.bind(this)}>Add User</button><br/>
			</div>
		)
	}
}

const stateToProps=(state)=>{
	return{
    user:state.user,  //这样就返回了一个user属性，component就具有了这个user属性，这样在这个conmponent里面就可以用this.props来调用
	}
}
const dispatchToProps=(dispatch)=>{
	return{
       createUser:(user)=>dispatch(actions.createUser(user))
			 //这样就返回了一个createUser方法，作为component的一个属性。这样在这个conmponent里面就可以用this.props来调用
	}
}

export default connect(stateToProps,dispatchToProps)(Users);
