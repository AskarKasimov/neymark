import { Outlet, useLocation } from "react-router-dom";
import style from "./App.module.scss";

import NavBar from "./NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const path = useLocation();
    const authed = false;
    return (
        <div className={style.App}>
            <Outlet />
            {
                authed
                    ? <NavBar />
                    : null
            }
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme="dark" />
        </div>
    );
}

export default App;
