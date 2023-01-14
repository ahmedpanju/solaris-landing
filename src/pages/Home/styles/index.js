import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to right, #171717, #3d3d3d);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1000px;
  background-color: red;
`;

export const Jumbotron = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled.h1`
  margin: 0;
  padding: 0;
`;

export const SmallText = styled.h4`
  margin: 0;
  padding: 0;
`;

export const BlackButton = styled.button`
  background-color: black;
  border-radius: 30px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  border: none;
  outline: none;
  margin-top: 25px;
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;
