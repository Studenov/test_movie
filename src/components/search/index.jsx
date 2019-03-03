import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchSvg from 'static/images/search.svg';
import { searchMovie, clearMovie } from 'store/search/actions';
import * as Styled from './styles';


class Search extends Component {
  state = {
    title: ''
  }

  componentWillMount() {
    window.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.onKeyPress);
  }

  onKeyPress = ({ key }) => key === 'Enter' ? this.search() : null;

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });
  
  search = () => {
    const { title } = this.state;
    const { actionSearchMovie, actionClearMovie } = this.props;
    if (title) {
      actionClearMovie();
      return actionSearchMovie(title);
    }
    return alert('Fill in the title field');
  }

  render() {
    const { title } = this.state;
    const { movie, loader } = this.props;
    return (
      <Styled.Wrapper>
        <Styled.BlockSearch>
          <Styled.Search type="text" name="title" value={title} onChange={this.handleChange} placeholder="Search..." maxLength={50} />
          <Styled.Button onClick={this.search}>
            <Styled.Icon>
              <use xlinkHref={`${SearchSvg}#Search`} />
            </Styled.Icon>
            <Styled.ButtonText>Search</Styled.ButtonText>
          </Styled.Button>
          <Styled.BlockMovie>
            {Object.keys(movie).length ? (
              <React.Fragment>
                <Styled.Poster src={movie.Poster} alt={movie.Title} title={movie.Title} />
                <Styled.Description>
                  <Styled.Title>{movie.Title}</Styled.Title>
                  <Styled.Year>{movie.Year}</Styled.Year>
                  <Styled.Plot>{movie.Plot}</Styled.Plot>
                  <Styled.Look to={`/${movie.imdbID}`}>More...</Styled.Look>
                </Styled.Description>
              </React.Fragment>
            ) : null}
            {loader ? (
              <Styled.BlockCircle>
                <Styled.Circle />
              </Styled.BlockCircle>
            ) : null}
          </Styled.BlockMovie>
        </Styled.BlockSearch>
      </Styled.Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.search.movie,
  loader: state.search.loader,
  error: state.search.error
});

const mapActionsToProps = dispatch => bindActionCreators({
  actionSearchMovie: searchMovie,
  actionClearMovie: clearMovie
}, dispatch);

export const SearchConnect = connect(mapStateToProps, mapActionsToProps)(Search);