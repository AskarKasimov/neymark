import { Link } from "react-router-dom";
import style from "./SignIn.module.scss";

const SignIn = () => {
    return (
        <form className={style.SignIn}>
            <h2>Вход</h2>
            <div className={style.auth}>
                <input className={style.first} type="login" placeholder="Логин" />
                <input className={style.second} type="password" placeholder="Пароль" />
            </div>
            <p>Забыли пароль?</p>
            <div className={style.buttons}>
                <input className={style.colored} type="submit" value="Войти как студент" />
                <input className={style.colored} type="submit" value="Войти как компания" />
                <Link to="/sign-up" className={style.gray} type="submit">
                    Регистрация нового аккаунта
                </Link>
            </div>
        </form>
    );
}

export default SignIn;