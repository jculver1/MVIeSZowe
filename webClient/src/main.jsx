
import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import './main.scss';
import Tools from './Components/Tools'
import MovieList from './Components/MovieList'
import MovieInfo from './Components/MovieInfo'
import Search from './Components/Search'
import StickyBox from "react-sticky-box/dist/esnext"
import data from './data'

class Main extends Component {
  ratingsArr = [...new Set(data.map(item => item.rating))]
  genreArr = [...new Set(data.map(item => item.genre))]
  yearArr = [...new Set(data.map(item => item.theaterdate.slice(6)))]

  constructor(props) {
    super(props)
    this.state = {
      movieData: [],
      movieID: 0,
      favoriteList: [],
      currentMovieList: [],
      displayList: [5, 10, 15, 50, 100],
      numDisplay: data.length,
      autoDisplay: true,
      filterChosen: false,
      searchChosen: false
    }
  }

  fetchData = (url, param) => {
    fetch(`${url}/${param}`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson)
        this.useState({
          movieData: myJson
        })
        return myJson
      });
  }

  getMovieInfo = (id) => {
    console.log(id)
    console.log('hello')
    this.setState({
      movieID: id
    })
  }

  getFilteredInfo = (filterName, event) => {
    if (filterName === 'theaterdate') {
      let currentList = data.filter(movie => movie[filterName].slice(6) === event)
      this.setState({
        currentMovieList: currentList,
        autoDisplay: false,
        filterChosen: true
      })
    }
    else if (filterName === 'search') {
      let inputLength = event.target.value.length
      let currentList = data.filter(movie => movie.title.slice(0, inputLength).toLowerCase() === event.target.value.toLowerCase())
      this.setState({
        currentMovieList: currentList,
        autoDisplay: false,
        searchChosen: true
      })
    }
    else {
      let currentList = data.filter(movie => movie[filterName] === event)
      this.setState({
        currentMovieList: currentList,
        autoDisplay: false,
        filterChosen: true,
      })
    }
  }

  addToFavorites = (id) => {
    console.log(id)
    let filterFavorites = this.state.favoriteList.filter(item => item.id === id)
    if (filterFavorites.length === 0) {
      const addMovie = data.filter(movie => movie.id === id)
      this.setState({
        favoriteList: [...this.state.favoriteList, addMovie[0]]
      })
    }
  }

  deleteFromFavorites = (e) => {
    console.log(e)
    let index = this.state.favoriteList.filter(item => item.id !== e)
    this.setState({
      favoriteList: index
    })
  }

  setDisplayNumber = (num) => {
    this.setState({
      numDisplay: num,
      searchChosen: false
    })
  }

  render() {
    return (
      <div className="App no-gutters">
        <div class="container-fluid ">
          <div style={{ height: '100vh', overflow: 'auto' }}>
            <div className='row no-gutters'>
              <div className="col-lg-2">
                <StickyBox >
                  <div class="d-flex justify-content-center Tools toolsContainer">
                    <Tools
                      ratingsArr={this.ratingsArr}
                      genreArr={this.genreArr}
                      yearArr={this.yearArr}
                      getFilteredInfo={this.getFilteredInfo}
                      setDisplayNumber={this.setDisplayNumber}
                      displayList={this.state.displayList}
                    />
                  </div>
                </StickyBox>
              </div>
              <div className="col movie-list">
                <div>
                  <Search getFilteredInfo={this.getFilteredInfo} />
                </div>
                <div className="movie-list">
                  <MovieList
                    addToFavorites={this.addToFavorites}
                    currentMovieList={this.state.currentMovieList}
                    getMovieInfo={this.getMovieInfo}
                    numDisplay={this.state.numDisplay}
                    autoDisplay={this.state.autoDisplay}
                    filterChosen={this.state.filterChosen}
                    searchChosen={this.state.searchChosen}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <StickyBox >
                  <MovieInfo
                    addToFavorites={this.addToFavorites}
                    movieID={this.state.movieID}
                    favoriteList={this.state.favoriteList}
                    deleteFromFavorites={this.deleteFromFavorites}
                  />
                </StickyBox>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default hot(module)(Main);
