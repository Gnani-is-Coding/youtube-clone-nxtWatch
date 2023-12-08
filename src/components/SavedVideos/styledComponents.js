import styled from 'styled-components'

export const SavedVideosSectionContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#0F0F0F' : '#F9F9F9')};
  height: 95vh;
  width: 100%;
  overflow: auto;
`
export const SavedVideosBanner = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#F1F1F1')};
  display: flex;
  align-items: center;
  padding-left: 40px;
`
export const SavedVideosHeading = styled.h1`
  color: ${props => (props.color ? '#F9FBFC' : '#20293C')};
  font-size: 28px;
  padding: 10px;
`
export const BannerIconContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#0F0F0F' : '#E1E9F0')};
  border-radius: 100px;
  font-size: 25px;
  color: #ff021b;
  margin-right: 10px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSavedHeading = styled.h1`
  color: ${props => (props.color ? '#f9f9f9' : '#010101')};
  font-size: 22px;
  margin-top: 35px;
`
export const NoSavedPara = styled.p`
  color: ${props => (props.color ? '#f9f9f9' : '#010101')};
  font-size: 20px;
`
