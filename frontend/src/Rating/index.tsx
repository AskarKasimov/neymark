import style from "./Rating.module.scss";

const Rating = () => {
    const list = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",];
    return (
        <div className={style.Rating}>
            <img src="/Vector.png" alt="" />
            <h1>Рейтинг</h1>
            <table className={style.rateList}>
                <tr>
                    <td className={style.top}>Топ</td>
                    <td className={style.name}>Фамилия И.</td>
                    <td className={style.points}>Баллы</td>
                </tr>
                {
                    list.map((_, i) =>
                        <tr>
                            <td className={style.top}>{i + 1}</td>
                            <td className={style.name}>Иванов И.</td>
                            <td className={style.points}>{10000 - i}</td>
                        </tr>
                    )
                }
                <tr style={{ position: "sticky", left: "0", top: "0", bottom: "70px", backgroundColor: "#A3A3A3", color: "#000000" }}>
                    <td className={style.top}>78</td>
                    <td className={style.name}>Третьяков А.</td>
                    <td className={style.points}>8890</td>
                </tr>
                {
                    list.map((_, i) =>
                        <tr>
                            <td className={style.top}>{list.length + i + 1}</td>
                            <td className={style.name}>Иванов И.</td>
                            <td className={style.points}>{10000 - i - list.length}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}

export default Rating;