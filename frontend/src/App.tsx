import style from "./App.module.scss";

import MainPage from "./MainPage";
import NavBar from "./NavBar";

const App = () => {
    const authed = true;
    return (
        <div className={style.App}>
            <img className={style.logo} src="/Vector.png" alt="" />
            <MainPage />
            {
                authed
                    ? <NavBar />
                    : null
            }
        </div>
    );
}

export default App;
