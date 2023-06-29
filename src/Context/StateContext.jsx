import { createContext, useEffect, useState } from "react"

export const StateContext = createContext()
const StateContextProvider = ({children}) => {

  const [isSideOpen, setIsSideOpen] = useState(true);



    const [theme, setTheme] = useState('light')
    const [sideBar, setSideBar] = useState(true)
    const [setting, setSetting] = useState(false)


    const [ver, setVer] = useState(true)
    const [hor, setHor] = useState(false)
    const [tCol, setTCol] = useState(false)
    const [semi, setSemi] = useState(false)


    const [lightTheme, setLightTheme] = useState(true)
    const [darkTheme, setDarkTheme] = useState(false)

    const [fluid, setFluid] = useState(true)
    const [boxed, setBoxed] = useState(false)


    const [fixed, setFixed] = useState(true)
    const [scrollable, setScrollable] = useState(false)

    
    const [lightTop, setLightTop] = useState(true)
    const [darkTop, setDarkTop] = useState(false)

    const [sizeDefault, setSizeDefault] = useState(true)
    const [compact, setCompact] = useState(false)
    const [smallIcon, setSmallIcon] = useState(false)
    const [smallHover, setSmallHover] = useState(false)


    const [viewDefault, setViewDefault] = useState(true)
    const [detached, setDetached] = useState(false)

    const [sideLight, setSideLight] = useState(false)
    const [sideDark, setSideDark] = useState(true)
    const [sideGradient, setSideGradient] = useState(false)

    const [img1, setImg1] = useState(true)
    const [img2, setImg2] = useState(false)
    const [img3, setImg3] = useState(false)
    const [img4, setImg4] = useState(false)
    const [img5, setImg5] = useState(false)

    const [disabled, setDisabled] = useState(true)
    const [enabled, setEnabled] = useState(false)




    const data = {isSideOpen, setIsSideOpen,theme, setTheme,sideBar, setSideBar,setting, setSetting,ver, setVer,hor, setHor,tCol, setTCol,semi, setSemi,lightTheme, setLightTheme,darkTheme, setDarkTheme,fluid, setFluid,boxed, setBoxed,fixed, setFixed,scrollable, setScrollable,lightTop, setLightTop,darkTop, setDarkTop,sizeDefault, setSizeDefault,compact, setCompact,smallIcon, setSmallIcon,smallHover, setSmallHover,viewDefault, setViewDefault,detached, setDetached,sideLight, setSideLight,sideDark, setSideDark,sideGradient, setSideGradient,img1, setImg1,img2, setImg2,img3, setImg3,img4, setImg4,img5, setImg5,disabled, setDisabled,enabled, setEnabled}

  return (
    <StateContext.Provider value={data}>{children}</StateContext.Provider>
  )
}

export default StateContextProvider
