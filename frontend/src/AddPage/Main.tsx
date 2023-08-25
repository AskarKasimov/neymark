import { Link } from "react-router-dom";
import style from "./AddPage.module.scss";

const Main = () => {
    return (
        <>
            <h1 className={style.usualText}>Активности</h1>
            <div className={style.AddPage}>
                <Link to="lections" className={style.AddButton + " " + style.blue}>
                    <p>Лекции</p>
                </Link>
                <Link to="startups" className={style.AddButton + " " + style.purple}>
                    <p>Стартапы</p>
                </Link>
                <Link to="competitions" className={style.AddButton + " " + style.red}>
                    <p>Соревнования</p>
                </Link>
            </div>
        </>
    );
}

export default Main;