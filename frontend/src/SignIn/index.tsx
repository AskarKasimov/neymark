import { Link, useNavigate } from "react-router-dom";
import style from "./SignIn.module.scss";
import { toast } from "react-toastify";
import { FormEvent, useState } from "react";
import { useAuthUserMutation } from "../store/API/neymark.auth";
import { IReg2User } from "../store/API/models.api";
import { useCookies } from "react-cookie";

const SignIn = () => {
    const [login, setLogin] = useState<string>();
    const [password, setPasssord] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    const [, setCookies] = useCookies();
    const navigate = useNavigate();

    const [auth] = useAuthUserMutation();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setLoading(true);
            const tokens = await auth({ username: login, password: password } as IReg2User).unwrap();
            setCookies("access_token", tokens.access_token);
            setCookies("refresh_token", tokens.refresh_token);
            toast.success("Успешный вход");
            navigate("/");
        }
        catch {
            setLoading(false);
            toast.error("Ошибка");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={style.SignIn}>
            <h2>Вход</h2>
            <div className={style.auth}>
                <input disabled={loading} value={login} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.currentTarget.value)} className={style.first} type="login" placeholder="Логин" />
                <input disabled={loading} value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPasssord(event.currentTarget.value)} className={style.second} type="password" placeholder="Пароль" />
            </div>
            <p onClick={() => toast.warning("В разработке")}>Забыли пароль?</p>
            <div className={style.buttons}>
                <input className={style.colored} type="submit" value="Войти как студент" />
                <input className={style.colored} type="submit" value="Войти как компания" />
                <Link to="/sign-up" className={style.gray} type="submit">
                    Регистрация нового аккаунта
                </Link>
                <div className="box" style={loading ? { visibility: "visible" } : { visibility: "hidden" }}>
                    <div className="container">
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SignIn;