import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from "./App.module.scss";

import NavBar from "./NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useUserQuery } from "./store/API/neymark.auth";

const Redirect = (props: { path: string }) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(props.path);
    }, []);

    return (<></>);
}

const App = () => {
    const path = useLocation();
    const { isLoading: userLoading, isSuccess: userSuccess, refetch } = useUserQuery(null);

    useEffect(() => {
        refetch();
        if (path.pathname.includes("sign-in") || path.pathname.includes("sign-up")) return;
        window.scrollTo(0, 0);
    }, [path.pathname]);

    return (
        <div className={style.App}>
            {
                userLoading
                    ? <>загружаюсь ёмаё</>
                    : path.pathname.includes("sign-in") || path.pathname.includes("sign-up")
                        ? userSuccess
                            ? <Redirect path="/" />
                            : <><Outlet /></>
                        : userSuccess
                            ? <><NavBar /><Outlet /></>
                            : <Redirect path="/sign-in" />
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
