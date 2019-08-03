import React, { Component } from 'react';
import auth from '../auth';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton';
import DeleteSweep from '@material-ui/icons/Delete';
import './profile.css'

export default class Profile extends Component {

    state = {
        likes: null,
      }
    
    componentDidMount() { this.likes() }

    likes = () => {
        let id = [auth.user.uid]
        fetch(`http://localhost:3001/api/userlikes/${id}`)
        .then(response => response.json())
        .then(json => this.setState({ likes : json }))
  }


    render() {
        return (
            
            <div className='contenedorPerfil'>
            <Paper className='paper'>
                <h2>
                Hola {auth.user !== null ? auth.user.email : 'Fulano' } , estos son tus likes:
                </h2>
            </Paper>

            {this.state.likes !== null ? 

            this.state.likes.response.map(foto => 
                <Paper  key={foto.photo_id}>
                    <img className="foto" src={foto.url} alt={foto.id} height='500px' width='100%' />
                    <IconButton 
                      aria-label="add to favorites"
                      onClick={() => console.log('deberia borrar')}>
                        <DeleteSweep />
                      </IconButton>
                </Paper> )
                :       
            <div>
            <br />
            <br />
            <br />
            <br />

            <LinearProgress />
            </div>
              
            }

            </div>
            
        )
    }
}
