import { Link } from "react-router-dom";
import style from "../SignIn.module.scss";

const SignUp = () => {
    return (
        <form className={style.SignIn}>
            <h2>Зарегистрироваться</h2>
            <div className={style.buttons}>
                <Link to="student" className={style.colored} type="submit">
                    Как студент
                </Link>
                <Link to="company" className={style.colored} type="submit">
                    Как компания
                </Link>
            </div>
        </form>
    );
}

export default SignUp;