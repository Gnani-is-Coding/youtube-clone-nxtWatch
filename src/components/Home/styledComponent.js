import styled from 'styled-components'

export const HomeSectionContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  height: 95vh;
  margin-top: 0px;
  padding-top: 30px;
  margin-bottom: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    flex-shrink: 1;
  }
  @media screen and (max-width: 767px) {
    height: 130vh;
  }
  overflow: auto;
`
export const SearchContainer = styled.div`
  background-color: transparent;
  border: 1px solid #383838;
  color: #f9f9f9;
  min-width: 300px;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  margin: 15px;
  border-radius: 5px;
`
export const SearchButton = styled.button`
  background-color: ${props => (props.bgColor ? '#383838' : '#cbd5e1')};
  width: 70px;
  margin-top: -5px;
  cursor: pointer;
  margin-bottom: -5px;
  height: 25px;
  color: ${props => (props.bgColor ? '#ffffff' : '')};
`
export const ChannelPara = styled.p`
  color: ${props => (props.color ? '#f9f9f9' : '#0f0f0f')};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    max-width: 270px;
  }
`
export const FailurePara = styled.p`
  color: ${props => (props.color ? '#f9f9f9' : '#0f0f0f')};
  font-size: 18px;
  font-weight: bolder;
`
