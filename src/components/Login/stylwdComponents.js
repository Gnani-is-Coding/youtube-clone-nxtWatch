import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.bgColor ? ' #231f20' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  max-width: 400px;
  box-shadow: 0px 0px 10px 0px #bfbfbf;
  border-radius: 10px;
`
export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #475569;
  width: 250px;
  height: 30px;
  padding: 5px;
  padding-left: 10px;
  color: ${props => (props.bgColor ? '#ffffff' : '')};
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
`
export const Label = styled.label`
  color: ${props => (props.color ? '#f9f9f9' : '#475569')};
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 5px;
`
export const ShowPara = styled.label`
  color: ${props => (props.color ? '#ffffff' : '')};
  font-size: 12px;
  padding-left: 10px;
`
