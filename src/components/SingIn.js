import React , {Component} from 'react'
import './sing.css'
import auth from '../auth'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link';


import logo from '../img/logo.png'

const styles = () => ({
    button: {
      margin: '5px',
      color: 'white'
    },
    input: {
      display: 'none',
    },
  });

class SingIn extends Component {
    state= {
        email:'' ,
        password : '',
        error: null
    }
    showError = () => {
      this.setState({error: auth.error.message})
    }
    authEmailPass = () => {
        const userData = {email:this.state.email , password: this.state.password}
        auth.login(userData, () => this.props.history.push('/'))
        if(auth.error){
          this.showError()
        } 
    }

    handleChange = name => event => this.setState({[name]: event.target.value})
    
        render(){
            const {classes} = this.props
            return (
              
                <div className= 'wrapper'>
                  <div className = 'hiden' />
                  <Paper className='paper'>
                  <img src={logo} alt='logo' height='50px' />
                    <h1> Iniciar Sesión</h1>
                    <hr/>
                    <form 
     
                     noValidate autoComplete='off'>
                    <TextField  
                    fullWidth
                    id='outlined-email-input'
                    label='Email'
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    type='email'
                    autoComplete='email'
                    margin='normal'
                    variant="outlined"/> 
                    
                    {/* Contraseña */}
                    <TextField 
                    fullWidth 
                    id="outlined-password-input"
                    label='Password'
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    type='password'
                    autoComplete='current-password'
                    margin='normal'
                    variant="outlined" /> 

                    <Button
                    onClick={this.authEmailPass} 
                    variant='contained' 
                    color= 'primary'
                    className={classes.button}
                    >Iniciar Sesión
                    </Button>

                    </form>
                    <br/>
                   
                {this.state.error}

                    <Link onClick={
                ()=>{
                    this.props.history.push('/singup')
                }
                }
            >
            <hr/> 
            ¿No tienes cuenta? Registrate aqui 
                
            </Link>


                    </Paper>
                </div>
            )
        
    }
}

export default withStyles(styles)(SingIn)