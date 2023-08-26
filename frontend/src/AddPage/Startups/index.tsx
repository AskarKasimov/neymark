import { Link } from "react-router-dom";
import style from "../AddPage.module.scss";
import { useState } from "react";

const Startups = () => {
    const [selected, setSelected] = useState<string>("");
    const interns = [
        { name: "НЕЙМАРК.Студент", desc: "EdTech", author: "Иванов И.", tag: "Management" },
        { name: "PriceTrace", desc: "E-commerce", author: "Третьяков А.", tag: "Frontend" },
        { name: "WireTester", desc: "ERM", author: "Смирнов С.", tag: "ML" },
        { name: "PillBox", desc: "MedTech", author: "Кузнецов Р.", tag: "Frontend" },
        { name: "TwistSwitch", desc: "other", author: "Соколов Е.", tag: "InfoSec" },
        { name: "crTicket", desc: "InfoSec", author: "Попов П.", tag: "other" },
        { name: "Timeward", desc: "EdTech", author: "Ульянов В.", tag: "Backend" },
    ]
    return (
        <>
            <h1 className={style.purpleText}>Стартапы</h1>
            <div className={style.AddPage}>
                <select value={selected} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSelected(event.currentTarget.value)} className={style.select}>
                    <option value="" selected disabled hidden>Фильтр</option>
                    <option value="">Все</option>
                    <option value="InfoSec">InfoSec</option>
                    <option value="EdTech">EdTech</option>
                    <option value="ERM">ERM</option>
                    <option value="CRM">CRM</option>
                    <option value="MedTech">MedTech</option>
                    <option value="other">Другое</option>
                </select>
                <Link to="create" className={style.createAct}>
                    Создать
                </Link>
                <div className={style.list}>
                    {
                        interns.map((element) =>
                            selected
                                ? element.desc === selected
                                    ? <div className={style.element}>
                                        <p className={style.startupTitle}>{element.name}</p>
                                        <p className={style.startupSubtitle}>{element.desc}</p>
                                        <p className={style.startupAuthor}>{element.author}</p>
                                    </div>
                                    : null
                                : <div className={style.element}>
                                    <p className={style.startupTitle}>{element.name}</p>
                                    <p className={style.startupSubtitle}>{element.desc}</p>
                                    <p className={style.startupAuthor}>{element.author}</p>
                                </div>
                        )
                    }
                    {/* <Link to="1" className={style.element}>
                        <p className={style.startupTitle}>PriceTrace</p>
                        <p className={style.startupSubtitle}>E-commerce</p>
                        <p className={style.startupAuthor}>Иванов И.</p>
                    </Link>
                    <Link to="2" className={style.element}>
                        <p className={style.startupTitle}>PriceTrace</p>
                        <p className={style.startupSubtitle}>E-commerce</p>
                        <p className={style.startupAuthor}>Иванов И.</p>
                    </Link> */}
                </div>
            </div>
        </>
    );
}

export default Startups;