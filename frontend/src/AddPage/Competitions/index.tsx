import { Link } from "react-router-dom";
import style from "../AddPage.module.scss";

const Competitions = () => {
    return (
        <>
            <h1 className={style.redText}>Соревнования</h1>
            <div className={style.AddPage}>
                <Link to="join" className={style.AddButton + " " + style.red}>
                    <p>Присоединиться</p>
                </Link>
                <Link to="create" className={style.AddButton + " " + style.red}>
                    <p>Создать</p>
                </Link>
            </div>
        </>
    );
}

export default Competitions;