import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function useDarkMode(){
 const [theme, setTheme] = useState(localStorage.theme)
 const colorTheme = theme === 'dark' ? 'light' : 'dark'


useEffect(()=>{
    const root = window className="document documentElement"
    root.classsList.remove(colorTheme)
    root.classsList.add(theme)
    localStorage
})
}


export default useDarkMode;