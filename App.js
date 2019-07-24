import React ,{Component} from 'react';
import './App.css';
import Moviecard from './components/moviecard';
// import Appbar from './components/Appbar';
import Moviedialog from './components/dialog';
// import Card from './components/Cards';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';
import Div from './components/div';

const Originalmovies=
 [ {id:1,title:'shaenshah'},
  {id:2,title:'jatt and juliet'},
  {id:3 ,title:'friends'}
 ];


class App extends Component{
 
  state={movies : [],selectedmovie:null,search:''};
  selectmovie=movie =>this.setState({selectedmovie:movie});
  clearmovie=()=>this.setState({selectedmovie:null});
  
  searchTextchanged = e => this.setState({searchText: e.target.value});
  
  search= async e=>{
    e.preventDefault();
    const {searchText}=this.state;
    const response= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1653a67bb789dfc91239b245e98ea74e&language=en-US&page=1&query=${searchText}`);
    const json= await response.json();
    this.setState({movies:json.results});
  }

  
  async componentDidMount(){
  //  setTimeout(()=>
  //   this.setState({movies:Originalmovies}),5000);
    const response= await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1653a67bb789dfc91239b245e98ea74e
    `)
    const json= await response.json();
    this.setState({movies:json.results});

}
  render(){ 
    const{movies,selectedmovie,searchText}=this.state;
    return(
      <div className='app'>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
        
            edge="start"
            className="button"
            color="inherit"
            aria-label="Open drawer"
          >
            
              <Div/>
          
           </IconButton>
          <Typography className='abc' variant="h4" noWrap>
            MOVIES 
          </Typography>
          <form
          onSubmit={this.search}>
            <input 
            type="search"
            value={searchText}
              onChange={this.searchTextchanged}
            startAdornment={
              <InputAdornment>
              <span role='img'arial-label='search'>

              </span>
              </InputAdornment>
            }>
                </input>
          </form>
        </Toolbar>
      </AppBar>
     {movies.map(movie =><Moviecard movie={movie} selectmovie={this.selectmovie}/>)}
     
     <div>
     <Moviedialog movie={selectedmovie} handleClose={this.clearmovie}/>
     </div>
      </div>

    );
  }
}
export default App;
