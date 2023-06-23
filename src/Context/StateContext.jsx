import { createContext, useState } from "react"

export const StateContext = createContext()
const StateContextProvider = ({children}) => {


    const [theme, setTheme] = useState('light')
    const [sideBar, setSideBar] = useState(true)
    const [setting, setSetting] = useState(false)

    const data = {theme, setTheme,sideBar, setSideBar,setting, setSetting}

  return (
    <StateContext.Provider value={data}>{children}</StateContext.Provider>
  )
}

export default StateContextProvider
