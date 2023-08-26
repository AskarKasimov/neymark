import { FormEvent } from "react";
import style from "../AddPage.module.scss";
import { toast } from "react-toastify";

const CreateStartup = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast.success("Принято на рассмотрение");
    }
    return (
        <>
            <h1 className={style.purpleText}>Стартапы</h1>
            <form onSubmit={handleSubmit} className={style.AddPage}>
                <input className={style.title} type="text" placeholder="Название" required />
                <textarea className={style.desc} rows={7} placeholder="Описание" required></textarea>
                <input className={style.date} type="datetime-local" required />
                <input className={style.colored} type="submit" value="Отправить заявку" />
            </form>
        </>
    );
}

export default CreateStartup;