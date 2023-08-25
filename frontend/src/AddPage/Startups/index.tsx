import { Link } from "react-router-dom";
import style from "../AddPage.module.scss";

const Startups = () => {
    return (
        <>
            <h1 className={style.purpleText}>Стартапы</h1>
            <div className={style.AddPage}>
                <Link to="join" className={style.AddButton + " " + style.purple}>
                    <p>Присоединиться</p>
                </Link>
                <Link to="create" className={style.AddButton + " " + style.purple}>
                    <p>Создать</p>
                </Link>
            </div>
        </>
    );
}

export default Startups;