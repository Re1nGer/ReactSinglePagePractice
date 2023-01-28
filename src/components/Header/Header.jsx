import React, { useContext } from 'react';
import Logo from '../../assets/logo.png';
import { Menu } from 'react-feather'
import "./Header.css";
import { ScrollContext } from '../../Contexts/ScrollContext';

function Header() {

    const { setIsDrawerOpen } = useContext(ScrollContext);

    const handleDrawerOpen = () => {
        setIsDrawerOpen((prevState) => !prevState)
    }

    return (
        <header className='header'>
            <div className='header__logo'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='header__hamburger'>
                <Menu className='header__hamburger_icon' onClick={handleDrawerOpen} size={30}/>
            </div>
        </header>
     );
}

export default Header;