import { FormEvent } from "react";
import style from "../../SignIn.module.scss";
import { toast } from "react-toastify";

const CompanySignUp = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast.warning("В разработке");
    }

    return (
        <form onSubmit={handleSubmit} className={style.SignIn}>
            <h2>Регистрация компании</h2>
            <div className={style.auth}>
                <input className={style.first} type="login" placeholder="Логин" />
                <input className={style.second} type="password" placeholder="Пароль" />
            </div>
            <div className={style.auth}>
                <input className={style.first} type="text" placeholder="Название" />
                <input className={style.second} type="text" placeholder="Ссылка на сайт" />
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

export default CompanySignUp;