import React, { useEffect } from "react";
import "./BurgerMenu.css";

const BurgerMenu = ({ active, setActive, toggleMenu }) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    const targetId = href.split("#")[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const yOffset = -70; // Adjust this value to match the height of your fixed navigation menu
      const yPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });

      toggleMenu();
    }
  };

  const items = [
    { value: "Главная", href: "#блок0", icon: "anchor" },
    { value: "Услуги", href: "#блок1", icon: "dialer_sip" },
    { value: "О клинике", href: "#блок2", icon: "api" },
    { value: "Адрес", href: "#блок3", icon: "android" },
  ];

  return (
    <>
      <div className={active ? "blur" : ""}></div>
      <div
        className={active ? "menu active" : "menu"}
        onClick={() => setActive(false)}
      >
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
