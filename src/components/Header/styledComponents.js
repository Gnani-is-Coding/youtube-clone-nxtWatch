import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: ${props => (props.bgColor ? '#212121' : '#f9f9f9')};
  height: 10vh;
  display: flex;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 576px) {
    padding-left: 35px;
    padding-right: 35px;
  }
`
export const NavOptionsContainerSmall = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (min-width: 577px) {
    display: none;
  }
`
export const NavContainerMedium = styled.ul`
  display: flex;
  align-items: center;
  padding-right: 20px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 2px solid ${props => (props.bgColor ? '#ffffff' : '#00306e')};
  color: ${props => (props.bgColor ? '#ffffff' : '#00306e')};
  height: 30px;
  width: 80px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 15px;
`
export const ListItem = styled.div`
  list-style-type: none;
  font-size: 30px;
  margin-left: 18px;
  color: ${props => (props.color ? '#ffffff' : '')};
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : ' #f1f1f1')};
  border-radius: 10px;
  padding: 20px;
  width: 365px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 0px #bfbfbf;
`
export const PopupPara = styled.p`
  color: ${props => (props.color ? '#ffffff' : '#181818')};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 30px;
  font-weight: 500;
`
export const MenuPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-right: 25px;
`
export const MenuCloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.color ? '#f9f9f9' : '')};
  font-size: 24px;
  margin-left: auto;
  margin-top: 20px;
  cursor: pointer;
`
