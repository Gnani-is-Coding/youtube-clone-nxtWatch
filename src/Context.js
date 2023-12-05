import React from 'react'

const Context = React.createContext({
  isDarkTheme: false,
  activeOption: 1,
  savedVideoDetails: [],
  changeTheme: () => {},
  changeActiveOption: () => {},
  addToSavedVideos: () => {},
})

export default Context
