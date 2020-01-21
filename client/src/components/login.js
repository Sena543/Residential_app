import React, {Component} from 'react';
import axios from 'axios';
 import LoginForm from './loginForm.js';



 /**
  * Renders the login page
  * Updates the forms by taking the values of the set state object
  * The submit function takes the inputs and tries to post to the databases using axios
  * The blueprint for the login form can be found in the login form file
  */ 
class Login extends Component{
    
    state={
        formData:{
            studentID:{
                element:'input',
                value:'',
                label: true,
                labelText:'Student ID',
                config:{
                    name:'studentID',
                    type:'text',
                    placeholder:'Student ID'
                }
            },
            password:{
                element:'input',
                value:'',
                label: true,
                labelText:'Password',
                config:{
                    name:'password',
                    type:'password',
                    placeholder:'Password'
                }           
        }
    }
}

    submitForm=(event)=>{
        //event.preventDefault();
        let enteredData = {};
        for(let data in this.state.formData){
            enteredData[data] = this.state.formData[data].value;
        }
       // console.log(enteredData);
        axios.post('http://localhost:3001/login')
        .then((res)=>{
            console.log(res)
            console.log(res.data);
        })
        .catch((error)=>{
            console.log(error.toJSON())
            })
    }


    updateForm = (state)=>{
        this.setState({
            formData:state
        })
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <LoginForm formData={this.state.formData} change = {(newState)=>{this.updateForm(newState)}} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;