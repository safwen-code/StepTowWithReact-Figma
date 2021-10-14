import ThemContext from './ThemContext'
import { useState } from 'react'
const ThemProvider = ({ children }) => {
  const [themState, setthemState] = useState('light')
  const themHundler = () => {
    setthemState(themState === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemContext.Provider value={{ themHundler, themState }}>
      {children}
    </ThemContext.Provider>
  )
}

export default ThemProvider
