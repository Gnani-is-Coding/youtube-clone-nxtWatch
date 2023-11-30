import React from 'react'

const Context = React.createContext({
  isDarkTheme: false,
  activeOption: 1,
  changeTheme: () => {},
  changeActiveOption: () => {},
})

export default Context
