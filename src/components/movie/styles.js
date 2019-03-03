import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 60px;
  padding: 0 0 0 15px;
  color: rgba(21, 43, 75, 1);
  font-size: 24px;
`;
export const BlockMovie = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const BlockPoster = styled.div`
  margin: 0 0 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Poster = styled.img`
  width: 215px;
  height: 320px;
`;
export const BlockDescription = styled.div`
  width: calc(100% - 260px);
  margin: 0 15px;
`;
export const Ratings = styled.div`
  margin: 15px 0 0 15px;
`;
export const Text = styled.p`
  margin: 0 0 15px 0;
  color: rgba(21, 43, 75, .8);
  font-size: 16px;
`;
export const Span = styled.span`
  font-weight: 600;
  margin: 0 5px 0 0;
  color: rgba(21, 43, 75, .8);
`;
export const Back = styled(Link)`
  width: 150px;
  padding: 5px 10px;
  margin: 15px 0 0 0;
  border: 1px solid #ff0053;
  outline: none;
  border-radius: 5px;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .1s;
  color: rgba(21, 43, 75, .8);
  &:active {
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, .5);
  }
`;