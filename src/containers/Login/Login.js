import React,{Component} from 'react';
import { connect } from 'react-redux';
import {checkLogin,logout} from '../../store/actions/index';
import { bindActionCreators } from 'redux';
import {FormErrors } from '../../components/FormErrors';
import { Link, Redirect } from "react-router-dom";

class Login extends Component{
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }
    componentDidMount(){
      const { logout } = this.props;

      logout();
        
    }
    handleUserInput =(e)=> {
      const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
    }
    handleSubmit=(event)=> {
    
     // alert('A email was submitted: ' + this.state.email+" "+this.state.password);
      event.preventDefault();
      const { checkLogin } = this.props;
       checkLogin({
        email:this.state.email,
        password:this.state.password
      });
    
    }
    render(){
      const{user} = this.props;
      if(Object.entries(user).length != 0){

        if(user.status==400){
         alert(user.message);
        }else{
          return <Redirect to="/dashboard" />;
        }
      }
    
        return (

       <>
       <div className="panel panel-default">
 <FormErrors formErrors={this.state.formErrors} />
    </div>
        <form className="demoForm" onSubmit={this.handleSubmit}>
       <h2>Sign up</h2>
       <div className={`form-group
                 ${this.errorClass(this.state.formErrors.email)}`} >
         <label htmlFor="email">Email address</label>
         <input type="email" onChange={(event) => this.handleUserInput(event)}
 name="email" value={this.state.email}

 />
 </div>     
       <br/>
     <br/>
     <div className={`form-group
                 ${this.errorClass(this.state.formErrors.password)}`} >
         <label htmlFor="password">Password</label>
         <input type="password" value={this.state.password}
 onChange={(event) => this.handleUserInput(event)}
 name="password" />
 </div>
       <br/>
       <br/>
       <button type="submit" className="btn btn-primary" 
  disabled={!this.state.formValid}>Sign up</button>
       
     </form>
       </>
          
        );
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
    
      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }
    
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
    errorClass=(error)=>{
      return(error.length === 0 ? '' : 'has-error');
   }
}
const mapStateToProps = ({login}) => ({
  user:login.user
 });
 
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
        checkLogin,
        logout
    },
    dispatch
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);

