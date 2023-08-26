import { FormEvent, useState } from "react";
import style from "../../SignIn.module.scss";
import { useCookies } from "react-cookie";
import { useAuthenticationMutation } from "../../../store/API/neymark.api";
import { useAuthUserMutation } from "../../../store/API/neymark.auth";
import { IReg2User, IRegUser } from "../../../store/API/models.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StudentSignUp = () => {
    const [login, setLogin] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [name, setName] = useState<string>();
    const [surname, setSurname] = useState<string>();
    const [mobile, setMobile] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    const [fetchAuth1] = useAuthenticationMutation();
    const [fetchAuth2] = useAuthUserMutation();
    const [, setCookies] = useCookies();
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(login, password, name, surname, mobile, email);
        try {
            setLoading(true);
            const data1 = { name, surname } as IRegUser;
            const auth1 = (await fetchAuth1(data1).unwrap()).id;
            const data2 = { username: auth1, password: password } as IReg2User;
            const auth2 = await fetchAuth2(data2).unwrap();
            setCookies("access_token", auth2.access_token);
            setCookies("refresh_token", auth2.refresh_token);
            toast.success("Успешная регистрация");
            navigate("/");
        }
        catch {
            setLoading(false);
            toast.error("Ошибка регистрации")
        }
    }

    return (
        <form onSubmit={handleSubmit} className={style.SignIn}>
            <h2>Регистрация студента</h2>
            <div className={style.auth}>
                <input disabled={loading} value={login} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.currentTarget.value)} className={style.first} type="login" placeholder="Логин" required />
                <input disabled={loading} value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)} className={style.second} type="password" placeholder="Пароль" required />
            </div>
            <div className={style.auth}>
                <input disabled={loading} value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.currentTarget.value)} className={style.first} type="text" placeholder="Имя" required />
                <input disabled={loading} value={surname} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSurname(event.currentTarget.value)} className={style.second} type="text" placeholder="Фамилия" required />
            </div>
            <div className={style.auth}>
                <input disabled={loading} value={mobile} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMobile(event.currentTarget.value)} className={style.first} type="number" placeholder="Телефон" required />
                <input disabled={loading} value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)} className={style.second} type="email" placeholder="Почта" required />
            </div>
            <div className={style.rememberMe}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Запомнить меня</label>
            </div>
            <div className={style.buttons}>
                <input disabled={loading} className={style.colored} type="submit" value="Зарегистрироваться" />
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

export default StudentSignUp;