import { Link } from "react-router-dom";
import style from "../AddPage.module.scss";
import { useState } from "react";

const Lections = () => {
    const [selected, setSelected] = useState<string>("");
    const interns = [
        { time: "26.08.2023/14:10", name: "ML — Основы", desc: "Начало разработки нейронной сети", author: "Иванов И.", tag: "ML" },
        { time: "26.08.2023/16:00", name: "Высшая математика", desc: "Матрицы и операции с ними", author: "Третьяков А.", tag: "Математика" },
        { time: "27.08.2023/9:00", name: "Английский", desc: "Разговорный урок", author: "Смирнов С.", tag: "Ин.яз." },
        { time: "26.08.2023/11:40", name: "Спорт. прог.", desc: "Алгоритмы сортировки", author: "Кузнецов Р.", tag: "Спорт. прог." },
    ]
    return (
        <>
            <h1 className={style.blueText}>Лекции</h1>
            <div className={style.AddPage}>
                <select value={selected} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSelected(event.currentTarget.value)} className={style.select}>
                    <option value="" selected disabled hidden>Фильтр</option>
                    <option value="">Все</option>
                    <option value="ML">ML</option>
                    <option value="Математика">Математика</option>
                    <option value="Ин.яз.">Ин.яз.</option>
                    <option value="Спорт. прог.">Спорт. прог.</option>
                </select>
                <Link to="create" className={style.createAct}>
                    Создать
                </Link>
                <div className={style.list}>
                    {
                        interns.map((element) =>
                            selected
                                ? element.tag === selected
                                    ? <div className={style.element} style={{ maxWidth: "1000px" }}>
                                        <p className={style.lectionTitle}>{element.name}</p>
                                        <p className={style.lectionSubtitle}>{element.desc}</p>
                                        <p className={style.lectionAuthor}>{element.author}</p>
                                        <p className={style.lectionTime}>{element.time}</p>
                                    </div>
                                    : null
                                : <div className={style.element} style={{ maxWidth: "1000px" }}>
                                    <p className={style.lectionTitle}>{element.name}</p>
                                    <p className={style.lectionSubtitle}>{element.desc}</p>
                                    <p className={style.lectionAuthor}>{element.author}</p>
                                    <p className={style.lectionTime}>{element.time}</p>
                                </div>
                        )
                    }
                    {/* <div className={style.element}>
                        <p className={style.lectionTitle}>ML – основы</p>
                        <p className={style.lectionSubtitle}>Начало разработки нейронной сети</p>
                        <p className={style.lectionAuthor}>Иванов И.</p>
                        <p className={style.lectionTime}>26.08.2023/14:10</p>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Lections;