import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#F9F9F9')};
  height: 95vh;
  width: 100%;
  overflow: auto;
  margin-bottom: 15px;
`
export const VideoHeader = styled.h1`
  color: ${props => (props.color ? '#ffffff' : '#101010')};
  font-size: 18px;
`
export const IconContainer = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: ${props => (props.color ? '#94a3b8' : '#64748b')};
  color: ${props => (props.isActive ? '#2563eb' : '')};
  font-size: 16px;
  margin: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`
export const Label = styled.label`
  margin-left: 6px;
`
export const ChannelTitle = styled.h1`
  color: ${props => (props.color ? '#f9f9f9' : '#101010')};
  font-size: 14px;
`
export const ChannelPara = styled.p`
  color: ${props => (props.color ? '#94a3b8' : '#64748b')};
  font-size: 14px;
  width: 200px;
  margin-top: -2px;
`
export const DescriptionPara = styled.p`
  color: ${props => (props.color ? '#f9f9f9' : '#101010')};
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 400;
  font-family: 'Roboto';
`
