import style from "../MainPage.module.scss";
import styles from "../../AddPage/AddPage.module.scss";
import { useState } from "react";

const Schedule = () => {
    const [selected, setSelected] = useState<string>("");
    const interns = [
        { time: "26.08.2023/14:10", name: "ML — Основы", desc: "Начало разработки нейронной сети", author: "Иванов И.", tag: "ML" },
        { time: "26.08.2023/16:00", name: "Высшая математика", desc: "Матрицы и операции с ними", author: "Третьяков А.", tag: "Математика" },
        { time: "27.08.2023/9:00", name: "Английский", desc: "Разговорный урок", author: "Смирнов С.", tag: "Ин.яз." },
        { time: "26.08.2023/11:40", name: "Спорт. прог.", desc: "Алгоритмы сортировки", author: "Кузнецов Р.", tag: "Спорт. прог." },
    ]
    return (
        <div className={style.schedule}>
            <h2>Твоё расписание</h2>
            <div className={style.filter}>
                <input type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                <select value={selected} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSelected(event.currentTarget.value)}>
                    <option value="" selected disabled hidden>Фильтр</option>
                    <option value="" >Все</option>
                    <option defaultValue="lection">Лекции</option>
                    <option defaultValue="competition">Соревнования</option>
                </select>
            </div>
            <div className={style.activitiesList}>
                {

                    selected !== "Соревнования"
                        ? interns.map((element) =>
                            <div className={styles.element} style={{ maxWidth: "1000px" }}>
                                <p className={styles.lectionTitle}>{element.name}</p>
                                <p className={styles.lectionSubtitle}>{element.desc}</p>
                                <p className={styles.lectionAuthor}>{element.author}</p>
                                <p className={styles.lectionTime}>{element.time}</p>
                            </div>
                        )
                        : null
                }
                {/* <div className={styles.element}>
                    <p className={styles.lectionTitle}>ML – основы</p>
                    <p className={styles.lectionSubtitle}>Начало разработки нейронной сети</p>
                    <p className={styles.lectionAuthor}>Иванов И.</p>
                    <p className={styles.lectionTime}>26.08.2023/14:10</p>
                </div> */}
            </div>
        </div >
    );
}

export default Schedule;