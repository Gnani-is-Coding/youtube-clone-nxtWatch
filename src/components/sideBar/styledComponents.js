import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  height: 95vh;
  width: 200px;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 20px;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const FooterPara = styled.p`
  color: ${props => (props.color ? '#f9f9f9' : '#314154')};
  font-weight: bold;
  font-size: 14px;
  font-family: 'Open Sans';
`
export const IconContainer = styled.div``

export const OptionContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${props => (props.color ? '#928F91' : '#606060')};
  color: ${props => (props.isActiveOption ? '#FF031C' : '')};
  text-decoration: none;
  padding-left: 10px;
  background-color: ${props => {
    if (props.color) {
      if (props.isActiveOption) {
        return '#383838'
      }
    }
    return ''
  }};
`
export const OptionPara = styled.p`
  color: ${props => (props.color ? '#f9f9f9' : '#1e293b')};
  padding-left: 15px;
  font-size: 14px;
`
