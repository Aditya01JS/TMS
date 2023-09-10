import { useEffect } from "react";
import { useState } from "react";


function useDarkMode(){
 const [theme, setTheme] = useState(localStorage.theme)
 const colorTheme = theme === 'dark' ? 'light' : 'dark'


useEffect(()=>{
    const root = window.document.documentElement
    root.classsList.remove(colorTheme) 
    root.classsList.add(theme)
    localStorage.setItem('theme', theme)
}, [theme, colorTheme])

return [colorTheme, setTheme]
}


export default useDarkMode;