import React from 'react';
import './style.css'
import auth from '../auth'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinearProgress from '@material-ui/core/LinearProgress'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

import Button from '@material-ui/core/Button'

class FullWidthGrid extends React.Component {

  state = {
    photos: null,
    page: 0
  }

  componentDidMount() { this.images() }

  images = () => {

    const client_id = '2c856ab0f3ae8dd407c10388c834c7c01cda68d6cf5b91c06f90e905da35b352'

    fetch(`https://api.unsplash.com/photos/?client_id=${client_id}&page=${this.state.page}`)
      .then(response => response.json())
      .then(json => this.setState({ photos: json }))
  }


  render() {

    const nextPage = () => {
      this.setState({ page: this.state.page + 1 })
      this.images()
    }
    const prePage = () => {
      this.setState({ page: this.state.page - 1 })
      this.images()
    }
    
    return (
      <div>
        {/* Condicional a si esta cargado */}

        {this.state.photos !== null ? (
          <div>
            <div className='container'>
              {this.state.photos.map(foto => (

                <div key={foto.id}>

                  <Card className='card'>
                    <CardHeader
                      title={foto.user.name !== null ? `${foto.user.name}` : 'Una foto cualquiera'}
                    // subheader=  {foto.description !==null ? `${foto.description}`: 'Una foto cualquiera'}
                    />
                    <CardMedia
                      className='media'
                      image="/static/images/cards/paella.jpg"
                      title="Paella dish"
                    />

                    <img className="foto" src={foto.urls.small} alt={foto.id} height='300px' width='100%' />

                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {foto.user.location !== null ? `${foto.user.location}` : 'Un lugar misterioso'}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      
                      <IconButton 
                      aria-label="add to favorites"
                      onClick={() => {
                        fetch('http://localhost:3000/api/images', {
                            method: 'POST',
                            body: JSON.stringify({
                                                  user_id: auth.user.id , 
                                                  photo_id: foto.id , 
                                                  url :foto.urls.small
                                                  }),
                            headers: {
                                      'Accept': 'application/json',
                                      'Content-Type': 'application/json'
                                      },
                        })
                        .then(res => res.json())
                        .catch(error => console.error('Error:', error))
                        
                        
                      }}>
                        <FavoriteIcon />
                      </IconButton>
                    
                    
                    </CardActions>
                  </Card>

                </div>))}

            </div>

            <div className='contenedorBotones'>
              <Button
                variant="contained"
                color="primary"
                onClick={prePage}>
                <ArrowBackIos />
                Anterior
                </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={nextPage} >
                Siguiente
                  <ArrowForwardIos />
              </Button>

            </div>

          </div>

        ) :
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




export default FullWidthGrid


