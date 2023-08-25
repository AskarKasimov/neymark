import style from "./MainPage.module.scss";

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
                        <div className="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.schedule}>
                <h2>Расписание</h2>
                <div className={style.filter}>
                    <input type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
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