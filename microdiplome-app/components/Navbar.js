import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/components/Navbar.module.css";
import Image from "next/image";
import logo from "../public/logos/logo-microdiplome.svg";

const Navbar =() => {
  
    const router = useRouter();
    
    return (
      <div className={style.container}>
        <nav className={style.nav}>
          <Image className={style.img} src={logo} />
          <ul className={style.ul}>
            <li className={router.pathname === '/' ? style.active : ""}>
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
        </nav>
      </div>
    );
  }


export default Navbar;
