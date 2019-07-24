import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 import { CardMedia } from '@material-ui/core';
import './dialog.css';

export default class Moviedialog extends React.Component{
    render(){
        const {movie, handleClose,handleClickOpen}=this.props;
    let title=null;
    let content=null;

    if(movie){
        title=<DialogTitle id="form-dialog-title">{movie.title}</DialogTitle>
        content=<DialogContent>
        <DialogContentText>
          {movie.overview}
        </DialogContentText>
        <CardMedia className='movie-detailed-image'
                image={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                title={movie.title}
              />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Release-date"
          type="date"
          value={movie.release_date}
          disabled
          fullWidth
        />
           <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Popularity"
          value={movie.popularity}
          disabled
          fullWidth
        />
           <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Vote average"
         
          value={movie.vote_average}
          disabled
          fullWidth
        />
           <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Vote count"
         
          value={movie.vote_count}
          disabled
          fullWidth
        />
      </DialogContent>
      
    }
  return (
      
    <div>
      <Button variant="outlined" color="primary" onMouseOver={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={!!movie} onClose={handleClose} aria-labelledby="form-dialog-title">
    {title}
    {content}
        <DialogActions>
          <Button onMouseOver={handleClose} color="primary">
            Close
          </Button>
 
        </DialogActions>
      </Dialog>
    </div>
  );
        }}