import { Link } from "react-router-dom";
import style from "../AddPage.module.scss";

const Lections = () => {
    return (
        <>
            <h1 className={style.blueText}>Лекции</h1>
            <div className={style.AddPage}>
                <Link to="join" className={style.AddButton + " " + style.blue}>
                    <p>Присоединиться</p>
                </Link>
                <Link to="create" className={style.AddButton + " " + style.blue}>
                    <p>Создать</p>
                </Link>
                <Link to="request" className={style.AddButton + " " + style.blue}>
                    <p>Запросить</p>
                </Link>
            </div>
        </>
    );
}

export default Lections;