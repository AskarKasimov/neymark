import style from "../../SignIn.module.scss";

const StudentSignUp = () => {
    return (
        <form className={style.SignIn}>
            <h2>Регистрация студента</h2>
            <div className={style.auth}>
                <input className={style.first} type="login" placeholder="Логин" />
                <input className={style.second} type="password" placeholder="Пароль" />
            </div>
            <div className={style.auth}>
                <input className={style.first} type="text" placeholder="Имя" />
                <input className={style.second} type="text" placeholder="Фамилия" />
            </div>
            <div className={style.auth}>
                <input className={style.first} type="number" placeholder="Телефон" />
                <input className={style.second} type="email" placeholder="Почта" />
            </div>
            <div className={style.rememberMe}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Запомнить меня</label>
            </div>
            <div className={style.buttons}>
                <input className={style.colored} type="submit" value="Зарегистрироваться" />
            </div>
        </form>
    );
}

export default StudentSignUp;