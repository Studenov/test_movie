import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const BlockSearch = styled.div`
  width: 800px;
  min-width: 320px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
export const Search = styled.input`
  width: calc(100% - 52px);
  min-width: 310px;
  height: 30px;
  padding: 10px 20px;
  border: 1px solid rgba(21, 43, 75, .5);
  border-radius: 5px;
  outline: none;
  color: rgb(21, 43, 75);
  font-size: 16px;
  margin: 0 5px;
  ::placeholder {
    color: rgba(21, 43, 75, .5);
  }
`;
export const Button = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: rgba(51, 168, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .1s;
  &:active {
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, .5);
  }
`;
export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #ffffff;
`;
export const ButtonText = styled.span`
  font-size: 14px;
  margin: 0 0 0 10px;
  color: #ffffff;
  text-align: center;
`;
export const BlockMovie = styled.div`
  width: 100%;
  min-width: 310px;
  height: 100px;
  margin: 0 5px;
  display: flex;
  flex-direction: row;
`;
export const Poster = styled.img`
  width: 135px;
  height: 200px;
`;
export const Description = styled.div`
  width: calc(100% - 175px);
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;
export const Title = styled.h2`
  color: rgba(21, 43, 75, 1);
  font-size: 20px;
`;
export const Year = styled.p`
  margin: 15px 0 0 0;
  color: rgba(21, 43, 75, .8);
  font-size: 14px;
`;
export const Plot = styled.p`
  margin: 15px 0 0 0;
  color: rgba(21, 43, 75, .8);
  font-size: 16px;
`;

// red #ff0053

export const BlockCircle = styled.div`
  display: flex; 
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transform: translateZ(1px);
`;
export const Circle = styled.div`
  width: 60px;
  height: 60px;
  margin: 6px;
  border-radius: 50%;
  background-color: rgba(51,168,255,1);
  animation: circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;