import { useRef } from "react";
import style from "./MainPage.module.scss";
import { ReactComponent as ArrowSVG } from "./arrow.svg";

const MainPage = () => {
    return (
        <div className={style.MainPage}>
            <div className={style.VideoLayout} >
                <video className={style.video} playsInline autoPlay muted loop>
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={style.Neymark}>
                    <h1>НЕЙМАРК</h1>
                    <p>Добро пожаловать в межвузовский кампус мирового уровня в Нижнем Новгороде</p>
                    <div className={style.arrow}>
                        <ArrowSVG />
                    </div>
                </div>
            </div>
            <div className={style.schedule}>
                <div className={style.datePicker}>
                    <input type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                </div>
                <div className={style.filterPicker}>
                    <select defaultValue="first">
                        <option defaultValue="first">First Value</option>
                        <option defaultValue="second">Second Value</option>
                        <option defaultValue="third">Third Value</option>
                    </select>
                </div>
                <div className={style.activitiesList}>

                </div>
            </div>
        </div>
    );
}

export default MainPage;