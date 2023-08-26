import { FormEvent } from "react";
import style from "../AddPage.module.scss";
import { toast } from "react-toastify";

const CreateLection = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast.success("Принято на рассмотрение");
    }
    return (
        <>
            <h1 className={style.blueText}>Лекции</h1>
            <form onSubmit={handleSubmit} className={style.AddPage}>
                <input className={style.title} type="text" placeholder="Название" required />
                <select className={style.select}>
                    <option value="" selected disabled hidden>Тематика</option>
                    <option value="InfoSec">InfoSec</option>
                    <option value="ML">ML</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Management">Management</option>
                    <option value="other">Другое</option>
                </select>
                <textarea className={style.desc} rows={5} placeholder="Учебные материалы на модерацию" required></textarea>
                <input className={style.title} type="text" placeholder="YouTube" required />
                <input className={style.date} type="datetime-local" required />
                <input className={style.colored} type="submit" value="Отправить заявку" />
            </form>
        </>
    );
}

export default CreateLection;