import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../components/moviecard.css';




class Moviecard extends React.Component{
selectmovie =()=>{
    const{movie,selectmovie}=this.props;
    selectmovie(movie);
};
    render(){
    const {movie}=this.props;
    return (
          <Card className='movie-card1'>
            <CardActionArea className='movie-card1'>
              <CardMedia class='movie-image'
                component="img"
                alt="moviess"
                height="240"
                image={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                title="movies"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {movie.overview}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              
            
              <Button size="small" color="primary" onClick={this.selectmovie}>
                Learn More
              </Button>
            </CardActions>
          </Card>
    )}
        }

export default Moviecard;