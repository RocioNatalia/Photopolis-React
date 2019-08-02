import React , {Component} from 'react'
import './sing.css'
import auth from '../auth'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import logo from '../img/logo.png'

const styles = () => ({
    
    button: {
      margin: '5px',
    },
    input: {
      display: 'none',
      width: '100%'
    },
  });

class SingUp extends Component {
    state= {
        email:'' ,
        password : ''
    }

    registerEmailPass = () => {
        const userData = {email:this.state.email , password: this.state.password}
        auth.register(userData, () => this.props.history.push('/singin'))
        }

        handleChange = name => event => this.setState({[name]: event.target.value})
        render(){
            const {classes} = this.props
            
            return (
                <div className= 'wrapper'>
                   <div className = 'hiden' />
                  <Paper className='paper'>
                  <img src={logo} alt='logo' height='50px' />
                    <h1> Te damos la bienvenida a PhotoPolis :)</h1>
                    <hr/>
                    <form 
                     noValidate autoComplete='off'>

                    <TextField
                    fullWidth
                    id="outlined-name"
                    label="Username"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    fullWidth
                    id='outlined-email-input'
                    label='Email'
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    type='email'
                    autoComplete='email'
                    margin='normal'
                    variant="outlined" /> 
                    
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

                    <Button onClick={this.registerEmailPass} variant='contained' color='primary' className={classes.button}
                    >
                        Registarme
                    </Button>
                    <br/>
                    <br/>
                    < Link onClick={
                      ()=>{
                          this.props.history.push('/singin')
                      }
                    }
            > ¿Ya tienes cuenta? Inicia sesión aqui 
                
            </Link>

                    </form>
                    </Paper>
                </div>
            )
        
    }
}

export default withStyles(styles)(SingUp)