import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
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
  @media screen and (min-width: 576px) {
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
export const ListItem = styled.li`
  list-style-type: none;
  font-size: 37px;
  margin-left: 23px;
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
`
export const PopupPara = styled.p`
  color: ${props => (props.color ? '#ffffff' : '#181818')};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 30px;
  font-weight: 500;
`
