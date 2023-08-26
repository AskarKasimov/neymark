import { Link } from "react-router-dom";
import style from "../AddPage.module.scss";

const Competitions = () => {
    return (
        <>
            <h1 className={style.redText}>Соревнования</h1>
            <div className={style.AddPage}>
                <select className={style.select}>
                    <option value="" selected disabled hidden>Фильтр</option>
                    <option value="">Все</option>
                    <option value="InfoSec">InfoSec</option>
                </select>
                <Link to="create" className={style.createAct}>
                    Создать
                </Link>
                <div className={style.list}>
                    <div className={style.element}>
                        <p className={style.compTitle}>NeimarkCTF</p>
                        <p className={style.compSubtitle}>Информационная безопасность</p>
                        <p className={style.compAuthor}>Иванов И.</p>
                        <p className={style.compTime}>25.08.2023/14:10</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Competitions;