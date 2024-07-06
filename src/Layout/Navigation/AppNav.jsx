import { React, useState  } from 'react'
import './AppNav.css'
import BurgerMenu from './BurgerMenu'
import logo1 from '/src/icons/logo.jpg.avif';
import logo2 from '/src/icons/logo2.png';
import LanguageDropdown from './LanguageDropdown'

export default function AppNav(){

    const [isOpen, setIsOpen] = useState(false);
    const [logoVisible, setLogoVisible] = useState(true );
    const [clickCount, setClickCount] = useState(0);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      }; 

      const handleLogoClick = () => {
        if (clickCount === 0) { // Проверяем, был ли уже сделан клик на логотип
            setLogoVisible(false); // Скрываем логотип
            setClickCount(1); // Устанавливаем количество кликов в 1
            setTimeout(() => {
                setLogoVisible(true); // Через 300мс показываем логотип снова
            }, 300);
        }
    };

    return(
        <div>
            <nav className='navigation-menu'>

                <div className={ isOpen ? 'burger-btn active' : 'burger-btn'} onClick={toggleMenu}>
                    <span></span>
                </div>

                <div className="nav_aligner">
                    <div className='title'><p>Dental clinic</p> </div>

                    <div className="logo" id="logo">

                        {logoVisible && 
                            <div 
                                id="logo1" onClick={handleLogoClick} >
                                <img src={logo1} alt="Логотип 1"/>
                            </div>}
                            
                        {!logoVisible && 
                            <div 
                                id="logo2"><img src={logo2} alt="Логотип 2"/>
                            </div>}
                    </div>
                </div>
                {/* <LanguageDropdown/> */}
            </nav>
            <BurgerMenu active={isOpen} setActive={setIsOpen} toggleMenu={toggleMenu}  />
        </div>
        // header={'Dantal clinic'}
    )
}