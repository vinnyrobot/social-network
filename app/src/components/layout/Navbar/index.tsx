import styles from "./index.module.css";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar(){

    const [showNavbarResponsive, setShowNavbarResponsive] = useState(false);

    function logOut(){
        localStorage.clear();
        alert("Você deletou sua conta");
        window.location.reload();
    }

    function handleShowNavbarResposive(){
        setShowNavbarResponsive(showNavbarResponsive ? false : true);
    }

    return(
        <>
            <header className={styles.navbar}>
                <div className={styles.logo}>
                    <h2 className={styles.textLogo}>Jvn</h2>
                </div>
                <nav>
                    <ul className={styles.links}>
                        {localStorage.getItem("login") ? (
                            <>
                                <li className={styles.link}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={styles.link}>
                                    <Link to="/createpost">Create Post</Link>
                                </li>
                                <li className={styles.link} onClick={logOut}>
                                    <Link to="/login">Log Out</Link>
                                </li>
                            </>
                        ): (
                            <>
                                <li className={styles.link}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={styles.link}>
                                    <Link to="/login">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                <FaBars size={30} onClick={handleShowNavbarResposive}/>
            </header>
            <section className={showNavbarResponsive ? styles.responsiveNavbar : styles.closeResponsiveNavbar}>
                <nav>
                    <ul className={styles.links}>
                        {localStorage.getItem("login") ? (
                            <>
                                <li className={styles.link}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={styles.link}>
                                    <Link to="/createpost">Create Post</Link>
                                </li>
                                <li className={styles.link} onClick={logOut}>
                                    <Link to="/login">Log Out</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className={styles.link}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={styles.link}>
                                    <Link to="/login">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Navbar;