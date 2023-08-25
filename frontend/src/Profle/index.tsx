import style from "./Profile.module.scss";

const Profile = () => {
    return (
        <div className={style.Profile}>
            <img src="/Vector.png" alt="" />
            <h1>Профиль</h1>
            <h2>Личные данные</h2>
            <div className={style.data}>
                <p>Иванов</p>
                <p>Иван</p>
                <p>ivan@example.com</p>
                <p>+71234567899</p>
            </div>
            <h3>Ачивки</h3>
            <div className={style.achievements}>
            <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
                <div className={style.achievement}></div>
            </div>
        </div>
    );
}

export default Profile;