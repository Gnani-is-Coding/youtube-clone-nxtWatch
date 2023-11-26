import React from 'react'

const Context = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
})

export default Context
