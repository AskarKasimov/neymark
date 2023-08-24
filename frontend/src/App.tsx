import { Outlet } from "react-router-dom";
import style from "./App.module.scss";

import NavBar from "./NavBar";

const App = () => {
    const authed = true;
    return (
        <div className={style.App}>
            <img className={style.logo} src="/Vector.png" alt="" />
            <Outlet />
            {
                authed
                    ? <NavBar />
                    : null
            }
        </div>
    );
}

export default App;
