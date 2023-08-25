import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as AddSVG } from "./add.svg";
import { ReactComponent as HomeSVG } from "./home.svg";
import { ReactComponent as ProfileSVG } from "./profile.svg";
import { useState } from "react";

const NavBar = () => {
    const [visible, setVisibility] = useState<boolean>(false);
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <Link onClick={() => setVisibility(false)} className={styles.link} to="activities">
                    <AddSVG />
                </Link>
                <Link onClick={() => setVisibility(false)} className={styles.link} to="/">
                    <HomeSVG />
                </Link>
                <div onClick={() => setVisibility(!visible)} className={styles.link} style={{ cursor: "pointer" }}>
                    <ProfileSVG />
                </div>
            </div>
            <div className={styles.profile} style={visible ? { transform: "translate(0%, 0%)" } : { transform: "translate(0%, 100%)" }}>
                <div className={styles.topMenu}>
                    <img src="/Vector.png" alt="" />
                    <div className={styles.menu}>
                        <Link onClick={() => setVisibility(false)} to="/profile">Профиль</Link>
                        <Link onClick={() => setVisibility(false)} to="/rating">Рейтинг</Link>
                        <a href="google.com">Уведомления</a>
                        <Link onClick={() => setVisibility(false)} to="/market">Маркет</Link>
                    </div>
                </div>
                <p>Выйти из аккаунта</p>
            </div>
        </div>
    );
}

export default NavBar;