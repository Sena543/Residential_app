import React,{Component} from 'react';
import FormField from './registrationform.js';
import axios from 'axios';


class Registration extends Component{
    state = {
        formData:{
            studentId:{
                element:'input',
                value:'',
                label: true,
                labelText:'Student ID' ,
                config:{
                    name:'student_id',
                    type: 'text',
                    placeholder:'Student ID'
                },
                validation:{
                    required: true,
                },
                valid:false,
                touched:false,
                validationMessage :''  
            },
            firstName:{
                element:'input',
                value:'',
                label: true,
                labelText:'First Name',
                config:{
                    name:'first_name',
                    type: 'text',
                    placeholder:'First Name'
                },
                validation:{
                    required: true,

                },
                valid:false,
                touched:false,
                validationMessage:''        
            },
            secondName:{
                element:'input',
                value:'',
                label: true,
                labelText:'Second Name',
                config:{
                    name:'second_name',
                    type: 'text',
                    placeholder:'Second Name'
                },
                validation:{
                    required: true,

                },
                valid:false,
                touched:false,
                validationMessage:''        
            },
            course:{
                element:'input',
                value:'',
                label: true,
                labelText:'Course'  ,
                config:{
                    name:'Course',
                    type:'text',
                    placeholder:'Course'
                },
                validation:{
                    required: true,

                },
                valid:false,
                touched:false,
                validationMessage:'' 
            },
            password:{
                element:'input',
                value:'',
                label: true,
                labelText:'Password' ,
                config:{
                    name:'password',
                    type: 'password',
                    placeholder:'Password'
                },
                validation:{
                    required: true,

                },
                valid:false,
                touched:false,
                validationMessage:'' 
            },  
            confirmpass:{
                element:'input',
                value:'',
                label: true,
                labelText:'Confirm Password' ,
                config:{
                    name:'confirmpass',
                    type: 'password',
                    placeholder:'Confirm Password'
                },
                validation:{
                    required: true,

                },
                valid:false,
                touched:false,
                validationMessage:''   
        }
    }
}

    updateForm = (newState)=>{
        this.setState({
            formData: newState
        })
    }

    submitForm = (event)=>{
        let dataToSubmit = {};

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }
        console.log(dataToSubmit);
        axios.post('http://localhost:3001/registration', dataToSubmit);
    }

    render(){
        return(
            <div>
                <h1><header >Welcome To The Registration Page</header></h1>
                <br/>
                <form onSubmit={this.submitForm} method='POST' action='/registration'>
                    <FormField
                         formData= {this.state.formData}
                         change={(newState) =>this.updateForm(newState) }/>

                    <button type='submit'>Submit</button>
                </form>
                 
            </div>
        )
    }
}

export default Registration;