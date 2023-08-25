import style from "../MainPage.module.scss";

const Schedule = () => {
    return (
        <div className={style.schedule}>
            <h2>Твоё расписание</h2>
            <div className={style.filter}>
                <input type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                <select defaultValue="first">
                    <option defaultValue="first">First Value</option>
                    <option defaultValue="second">Second Value</option>
                    <option defaultValue="third">Third Value</option>
                </select>
            </div>
            <div className={style.activitiesList}>

            </div>
        </div>
    );
}

export default Schedule;