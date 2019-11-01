import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('darkModeEnabled');
    const body = document.querySelector('body');
    // const header = document.querySelector('header');

    useEffect(() => {
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
        // darkMode ? header.classList.add('dark-mode') : header.classList.remove('dark-mode');
    }, [darkMode])
   
    return [darkMode, setDarkMode]
}

export default useDarkMode
