import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as AddSVG } from "./add.svg";
import { ReactComponent as HomeSVG } from "./home.svg";
import { ReactComponent as ProfileSVG } from "./profile.svg";

const NavBar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <Link to="add">
                    <AddSVG />
                </Link>
                <Link to="/">
                    <HomeSVG />
                </Link>
                <Link to="home">
                    <ProfileSVG />
                </Link>
            </div>
        </div>
    );
}

export default NavBar;