import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchMovie } from 'store/search/actions';
import * as Styled from './styles';

class Movie extends Component {
  componentDidMount() {
    const { movie, actionSearchMovie } = this.props;
    if (Object.keys(movie).length) return;
    const id = window.location.pathname.split('/');
    actionSearchMovie(id[1]);
  }

  renderChildren = () => {
    const { movie } = this.props;
    if (!Object.keys(movie).length) return null;
    const arr = [];
    for (const key in movie) {
      if (key === 'Poster' || key === 'Response') continue;
      if (key === 'Ratings') {
        arr.push(
          <div key={key}>
            <Styled.Span>{key}:</Styled.Span>
              <Styled.Ratings>
                {movie[key].map((elem) => (
                  <Styled.Text key={elem.Source}>
                    <Styled.Span>{elem.Source}:</Styled.Span>
                    {elem.Value}
                  </Styled.Text>
                ))}
              </Styled.Ratings>
          </div>
        );
        continue;
      }
      arr.push(
        <Styled.Text key={key}>
          <Styled.Span>{key}:</Styled.Span>
          {movie[key]}
        </Styled.Text>
      );
    }
    return arr;
  }

  render() {
    const { movie } = this.props;
    return (
      <Styled.Wrapper>
        <Styled.Block>
          <Styled.Title>{movie.Title}</Styled.Title>
          <Styled.BlockMovie>
            <Styled.BlockPoster>
              <Styled.Poster src={movie.Poster} alt={movie.Title} title={movie.Title} />
              <Styled.Back to="/">Back</Styled.Back>
            </Styled.BlockPoster>
            <Styled.BlockDescription>
              {this.renderChildren()}
            </Styled.BlockDescription>
          </Styled.BlockMovie>
        </Styled.Block>
      </Styled.Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.search.movie
});

const mapActionsToProps = dispatch => bindActionCreators({
  actionSearchMovie: searchMovie
}, dispatch);

export const MovieConnect = connect(mapStateToProps, mapActionsToProps)(Movie);