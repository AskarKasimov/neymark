import { Outlet } from "react-router-dom";
import style from "./AddPage.module.scss";

const AddPage = () => {
    return (
        <div className={style.Main}>
            <img src="/Vector.png" alt="" />
            <Outlet />
        </div>
    );
}

export default AddPage;