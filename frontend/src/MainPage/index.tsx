import { Outlet } from "react-router-dom";
import style from "./MainPage.module.scss";
import { ReactComponent as ArrowSVG } from "./arrow.svg";

const MainPage = () => {
    return (
        <div className={style.MainPage}>
            <div className={style.VideoLayout} >
                <video className={style.video} playsInline autoPlay muted loop>
                    <source src="/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={style.Neymark}>
                    <h1>НЕЙМАРК</h1>
                    <p>Добро пожаловать в межвузовский кампус мирового уровня в Нижнем Новгороде</p>
                    <div className={style.arrow}>
                        {/* <div className="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div> */}
                        <ArrowSVG />
                        <ArrowSVG />
                        <ArrowSVG />
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default MainPage;