import { Outlet, useLocation } from "react-router-dom";
import style from "./App.module.scss";

import NavBar from "./NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

const App = () => {
    const path = useLocation();
    const authed = true;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path])
    return (
        <div className={style.App}>
            {
                authed
                    ? <NavBar />
                    : null
            }
            <Outlet />
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
