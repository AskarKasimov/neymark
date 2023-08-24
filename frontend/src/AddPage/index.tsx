import { Link } from "react-router-dom";
import style from "./AddPage.module.scss";

const AddPage = () => {
    return (
        <div className={style.AddPage}>
            <Link to="lection" className={style.AddButton + " " + style.blue}>
                <p>Лекции</p>
            </Link>
            <Link to="starup" className={style.AddButton + " " + style.purple}>
                <p>Стартапы</p>
            </Link>
            <Link to="competitions" className={style.AddButton + " " + style.red}>
                <p>Соревнования</p>
            </Link>
        </div>
    );
}

export default AddPage;