import style from "./MainPage.module.scss";

const MainPage = () => {
    return (
        <div className={style.MainPage}>
            <video className={style.video} playsInline autoPlay muted loop>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={style.Neymark}>
                <h1>НЕЙМАРК</h1>
                <p>Добро пожаловать в межвузовский кампус мирового уровня в Нижнем Новгороде</p>
            </div>
        </div>
    );
}

export default MainPage;