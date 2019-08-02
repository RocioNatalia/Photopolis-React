import React, { Component } from 'react';
import auth from '../auth';
import Paper from '@material-ui/core/Paper';
import './profile.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div className='contenedorPerfil'>
            <Paper className='paper'>
                <h2>
                Hola {auth.user !== null ? auth.user.email : 'Fulano' }
                    
                </h2>
                
            </Paper>
            </div>
        )
    }
}
