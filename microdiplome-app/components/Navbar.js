import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/components/Navbar.module.css";
import Image from "next/image";
import logo from "../public/logos/logo-microdiplome.svg";

const Navbar = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <Image className={style.img} src={logo} alt="Logo du site, microdiplome" />
        <div className={style.menuIcon} onClick={handleMenuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* Menu déroulant */}
        {menuOpen && (
          <ul className={style.menuMobile}>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/">Apprendre</Link>
            </li>
            <li>
              <Link href="/">Autres</Link>
            </li>
            <li>
              <Link href="/">Connexion</Link>
            </li>
          </ul>
        )}
        <ul className={style.menu}>
          <li className={router.pathname === "/" ? style.active : ""}>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/">Apprendre</Link>
          </li>
          <li>
            <Link href="/">Autres</Link>
          </li>
          <li className={router.pathname === "/connection" ? style.active : ""}>
            <Link href="/connection">Connexion</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
