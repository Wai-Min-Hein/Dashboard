import { createContext, useEffect, useState } from "react"

export const StateContext = createContext()
const StateContextProvider = ({children}) => {

  const [isSideOpen, setIsSideOpen] = useState(true);


const states = JSON.parse(localStorage.getItem('states'))



    const [theme, setTheme] = useState('light')
    const [sideBar, setSideBar] = useState(true)
    const [setting, setSetting] = useState(false)


    const [ver, setVer] = useState(states.ver)
    const [hor, setHor] = useState(states.hor)
    const [tCol, setTCol] = useState(states.tCol)
    const [semi, setSemi] = useState(false)


    const [lightTheme, setLightTheme] = useState(states.lightTheme)
    const [darkTheme, setDarkTheme] = useState(states.darkTheme)

    const [fluid, setFluid] = useState(states.fluid)
    const [boxed, setBoxed] = useState(states.boxed)


    const [fixed, setFixed] = useState(states.fixed)
    const [scrollable, setScrollable] = useState(states.scrollable)

    
    const [lightTop, setLightTop] = useState(states.lightTop)
    const [darkTop, setDarkTop] = useState(states.darkTop)

    const [sizeDefault, setSizeDefault] = useState(states.sizeDefault)
    const [compact, setCompact] = useState(states.compact)
    const [smallIcon, setSmallIcon] = useState(states.smallIcon)
    const [smallHover, setSmallHover] = useState(states.smallHover)


    const [viewDefault, setViewDefault] = useState(states.viewDefault)
    const [detached, setDetached] = useState(states.detached)

    const [sideLight, setSideLight] = useState(states.sideLight)
    const [sideDark, setSideDark] = useState(states.sideDark)
    const [sideGradient, setSideGradient] = useState(states.sideGradient)

    const [img1, setImg1] = useState(states.img1)
    const [img2, setImg2] = useState(states.img2)
    const [img3, setImg3] = useState(states.img3)
    const [img4, setImg4] = useState(states.img4)
    const [img5, setImg5] = useState(states.img5)

    const [disabled, setDisabled] = useState(states.disabled)
    const [enabled, setEnabled] = useState(states.enabled)

    // const LsStates = {ver,hor,tCol,semi,lightTheme,darkTheme,fluid,boxed,fixed,boxed,fixed,scrollable,lightTop,darkTop,sizeDefault,compact,smallIcon,smallHover,viewDefault,detached,sideLight,sideDark,sideGradient,img1,img2,img3,img4,img5,disabled,enabled}
    useEffect(() => {

  localStorage.setItem('states',JSON.stringify( {ver,hor,tCol,semi,lightTheme,darkTheme,fluid,boxed,fixed,boxed,fixed,scrollable,lightTop,darkTop,sizeDefault,compact,smallIcon,smallHover,viewDefault,detached,sideLight,sideDark,sideGradient,img1,img2,img3,img4,img5,disabled,enabled}))
}, [ver,hor,tCol,semi,lightTheme,darkTheme,fluid,boxed,fixed,boxed,fixed,scrollable,lightTop,darkTop,sizeDefault,compact,smallIcon,smallHover,viewDefault,detached,sideLight,sideDark,sideGradient,img1,img2,img3,img4,img5,disabled,enabled]) 
console.log(hor, tCol)



    const data = {isSideOpen, setIsSideOpen,theme, setTheme,sideBar, setSideBar,setting, setSetting,ver, setVer,hor, setHor,tCol, setTCol,semi, setSemi,lightTheme, setLightTheme,darkTheme, setDarkTheme,fluid, setFluid,boxed, setBoxed,fixed, setFixed,scrollable, setScrollable,lightTop, setLightTop,darkTop, setDarkTop,sizeDefault, setSizeDefault,compact, setCompact,smallIcon, setSmallIcon,smallHover, setSmallHover,viewDefault, setViewDefault,detached, setDetached,sideLight, setSideLight,sideDark, setSideDark,sideGradient, setSideGradient,img1, setImg1,img2, setImg2,img3, setImg3,img4, setImg4,img5, setImg5,disabled, setDisabled,enabled, setEnabled}

  return (
    <StateContext.Provider value={data}>{children}</StateContext.Provider>
  )
}

export default StateContextProvider
