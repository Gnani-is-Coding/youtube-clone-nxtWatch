import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#F9F9F9')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.color ? '#ffffff' : '#010101')};
  font-size: 20px;
  margin-top: 20px;
`
export const Para = styled.p`
  color: ${props => (props.color ? '#879fb3' : '#8e6581')};
  font-size: 16px;
`
