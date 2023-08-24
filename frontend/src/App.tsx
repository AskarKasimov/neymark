import style from "./App.module.scss";

import MainPage from "./MainPage";
import NavBar from "./NavBar";

const App = () => {
    const authed = true;
    return (
        <div className={style.App}>
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
