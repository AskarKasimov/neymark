import { toast } from "react-toastify";
import style from "../AddPage.module.scss";
import { FormEvent } from "react";

const CreateCompetition = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast.success("Принято на рассмотрение");
    }
    return (
        <>
            <h1 className={style.redText}>Соревнования</h1>
            <form onSubmit={handleSubmit} className={style.AddPage}>
                <input className={style.title} type="text" placeholder="Название" required />
                <select className={style.select} required>
                    <option value="" selected disabled hidden>Тематика</option>
                    <option value="InfoSec">InfoSec</option>
                    <option value="ML">ML</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Management">Management</option>
                    <option value="other">Другое</option>
                </select>
                <textarea className={style.desc} rows={7} placeholder="Описание" required></textarea>
                <input className={style.date} type="datetime-local" required />
                <input className={style.colored} type="submit" value="Отправить заявку" />
            </form>
        </>
    );
}

export default CreateCompetition;