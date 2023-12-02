import styled from 'styled-components'

export const ChannelPara = styled.p`
  color: ${props => (props.color ? '#f9f9f9' : '#0f0f0f')};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 16px;
  }
`
