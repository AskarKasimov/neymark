import styles from "./NavBar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as AddSVG } from "./add.svg";
import { ReactComponent as HomeSVG } from "./home.svg";
import { ReactComponent as ProfileSVG } from "./profile.svg";
import { ReactComponent as SiteSVG } from "./6358082_browser_earth_global_globe_internet_icon.svg";
import { ReactComponent as TelegramSVG } from "./telegram-svgrepo-com.svg";
import { ReactComponent as VkSVG } from "./VK Logo.svg";
import { ReactComponent as YtSVG } from "./YouTube-Icon-Full-Color-Logo.wine.svg";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

const NavBar = () => {
    const [visible, setVisibility] = useState<boolean>(false);
    const [, , deleteCookies] = useCookies();
    const navigate = useNavigate();
    const logOut = () => {
        deleteCookies("access_token");
        deleteCookies("refresh_token");
        setVisibility(false);
        navigate("/sign-in");
        window.location.reload();
    }
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
                        <Link onClick={() => { setVisibility(false); toast.warning("Профиль пользователя в разработке") }} to="/profile">Профиль</Link>
                        <Link onClick={() => { setVisibility(false); toast.warning("Ожидаем данные пользователей") }} to="/rating">Рейтинг</Link>
                        <a target="_blank" rel="noreferrer" href="https://t.me/NeimarkInfoBot">Уведомления</a>
                        <Link onClick={() => { setVisibility(false); toast.warning("Валютная система ещё обсуждается") }} to="/market">Маркет</Link>
                        <div className={styles.links}>
                            <a target="_blank" rel="noreferrer" href="https://neimark-it.ru"><SiteSVG /></a>
                            <a target="_blank" rel="noreferrer" href="https://t.me/neimarkitlektoriy"><TelegramSVG /></a>
                            <a target="_blank" rel="noreferrer" href="https://vk.com/neimark_it"><VkSVG /></a>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@neimark-it"><YtSVG /></a>
                        </div>
                    </div>
                </div>
                <p style={{ cursor: "pointer" }} onClick={logOut}>Выйти из аккаунта</p>
            </div>
        </div>
    );
}

export default NavBar;