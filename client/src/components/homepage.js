import React,{Component} from 'react';

class Homepage extends Component{


    render(){
        return(
            <div>
                <header><h1>Welcome To The University Homepage</h1></header>
                <form onSubmit={this.submitReg} method='GET' action='registration'>
                   <h1> Choose </h1>
                   <button id='register_button'>Register</button>
                   <h3>To register if you're a new student</h3>
                   </form>
                   <form  onSubmit={this.submitLog} method='GET' action='login'>
                   <button id='login_button' type='submit'>Login</button>
                   <h3>To login and apply for residence</h3>
                </form>
            </div>
        )
    }
}

export default Homepage;