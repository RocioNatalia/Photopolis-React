import React from 'react';
import './style.css'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';


class FullWidthGrid extends React.Component {

  state = {
    photos: null
  }

  componentDidMount() { this.images() }

  images = () => {
    fetch(`https://api.unsplash.com/photos/?client_id=2c856ab0f3ae8dd407c10388c834c7c01cda68d6cf5b91c06f90e905da35b352`)
      .then(response => response.json())
      .then(json => this.setState({ photos: json }))
  }
  
  render() {

    return (
      <div className='root'>
        {/* Condicional a si esta cargado */}

        {this.state.photos !== null ? (

          <Grid container className='container'>

            {this.state.photos.map(foto => (
              
             <div className= 'items'> <Grid item xs={12} sm={3}  >

                <Card className='card'>
                  <CardHeader
                    title={foto.user.name !==null ? `${foto.user.name}`: 'Una foto cualquiera'}
                    subheader=  {foto.description !==null ? `${foto.description}`: 'Una foto cualquiera'}
                  />
                  <CardMedia
                    className='media'
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                  />

                  <img src={foto.urls.small} alt={foto.id} height='300px' />

                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {foto.user.location !==null ? `${foto.user.location}`: 'Un lugar misterioso'}
                </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                      
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid> </div>))}
          </Grid>) : 'Loading...'}
      </div>
    )
  }
}




export default FullWidthGrid


