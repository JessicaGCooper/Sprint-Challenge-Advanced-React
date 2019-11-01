import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('darkModeEnabled');
    const body = document.querySelector('body');
    
    console.log('body', body)

    useEffect(() => {
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode])
   
    return [darkMode, setDarkMode]
}

export default useDarkMode
