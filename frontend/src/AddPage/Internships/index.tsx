import { Link } from "react-router-dom";
import style from "../AddPage.module.scss";
import { toast } from "react-toastify";
import { useState } from "react";

const Internships = () => {
    const [selected, setSelected] = useState<string>("");
    const interns = [
        { color: "#009621", name: "СБЕР", desc: "Frontend разработчик", sal: "₽15 000 — 20 000", tag: "Frontend" },
        { color: "#FC3F1D", name: "Яндекс.Картинки", desc: "Data scientist", sal: "₽20 000 — 30 000", tag: "ML" },
        { color: "#38C1D8", name: "EPAM", desc: "Frontend Vue.js", sal: "$150 — 250", tag: "Frontend" },
        { color: "#CE0E2D", name: "HUAWEI", desc: "ИБ-специалист", sal: "$200 — 350", tag: "InfoSec" },
        { color: "#7701FE", name: "Ростелеком", desc: "DevOps-инженер", sal: "₽10 000 — 25 000", tag: "other" },
        { color: "#38C1D8", name: "EPAM", desc: "Backend node.js", sal: "$200 — 250", tag: "Backend" },
        { color: "#FC3F1D", name: "Яндекс.Музыка", desc: "Project manager", sal: "₽30 000", tag: "Management" },
        { color: "#FEDD2D", name: "Tinkoff", desc: "HR", sal: "₽20 000 — 35 000", tag: "Management" },
        { color: "#FEDD2D", name: "Tinkoff", desc: "Backend Golang", sal: "₽40 000 — 45 000", tag: "Backend" },
    ]

    return (
        <>
            <h1 className={style.lightText}>Стажировки</h1>
            <div className={style.AddPage}>
                <select value={selected} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSelected(event.currentTarget.value)} className={style.select}>
                    <option value="" selected disabled hidden>Фильтр</option>
                    <option value="">Все</option>
                    <option value="InfoSec">InfoSec</option>
                    <option value="ML">ML</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Management">Management</option>
                    <option value="other">Другое</option>
                </select>
                <div onClick={() => toast.error("Требуется учётная запись компании")} className={style.createAct}>
                    Создать
                </div>
                <div className={style.list}>
                    {
                        interns.map((element) =>
                            selected
                                ? element.tag === selected
                                    ? <div className={style.element} style={{ borderColor: element.color }}>
                                        <p className={style.internTitle}>{element.name}</p>
                                        <p className={style.internSubtitle}>{element.desc}</p>
                                        <p className={style.internSalary}>{element.sal}</p>
                                    </div>
                                    : null
                                : <div className={style.element} style={{ borderColor: element.color }}>
                                    <p className={style.internTitle}>{element.name}</p>
                                    <p className={style.internSubtitle}>{element.desc}</p>
                                    <p className={style.internSalary}>{element.sal}</p>
                                </div>
                        )
                    }
                    {/* <div className={style.element} style={{ borderColor: "#009621" }}>
                        <p className={style.internTitle}>СБЕР</p>
                        <p className={style.internSubtitle}>Frontend разработчик</p>
                        <p className={style.internSalary}>₽15 000 — 20 000</p>
                    </div>
                    <div className={style.element} style={{ borderColor: "#FC3F1D" }}>
                        <p className={style.internTitle}>Яндекс.Картинки</p>
                        <p className={style.internSubtitle}>Data scientist</p>
                        <p className={style.internSalary}>₽20 000 — 30 000</p>
                    </div>
                    <div className={style.element} style={{ borderColor: "#CE0E2D" }}>
                        <p className={style.internTitle}>HUAWEI</p>
                        <p className={style.internSubtitle}>ИБ-специалист</p>
                        <p className={style.internSalary}>$200 — 350</p>
                    </div>
                    <div className={style.element} style={{ borderColor: "#7701FE" }}>
                        <p className={style.internTitle}>Ростелеком</p>
                        <p className={style.internSubtitle}>DevOps-инженер</p>
                        <p className={style.internSalary}>₽10 000 — 25 000</p>
                    </div>
                    <div className={style.element} style={{ borderColor: "#38C1D8" }}>
                        <p className={style.internTitle}>EPAM</p>
                        <p className={style.internSubtitle}>Backend node.js</p>
                        <p className={style.internSalary}>$200 — 250</p>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Internships;