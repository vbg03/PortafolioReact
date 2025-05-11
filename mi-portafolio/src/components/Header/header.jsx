import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import "../../App.css"; // ✅ Ruta correcta desde Header.jsx ubicado en /components/Header


function Header() {
  const headerRef = useRef();
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, { scope: headerRef });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    gsap.to(navRef.current, {
      height: menuOpen ? 0 : 'auto',
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <header ref={headerRef} className="header">
      <div className="logo">TuNombre</div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <nav ref={navRef} className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
