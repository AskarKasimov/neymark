import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './App';
import "./index.scss";
import MainPage from './MainPage';
import AddPage from './AddPage';
import Lections from './AddPage/Lections';
import Startups from './AddPage/Startups';
import Competitions from './AddPage/Competitions';
import Main from './AddPage/Main';
import SignIn from './SignIn';
import Schedule from './MainPage/Schedule';
import SignUp from './SignIn/SignUp';
import Student from './SignIn/SignUp/StudentSIgnUp';
import StudentSignUp from './SignIn/SignUp/StudentSIgnUp';
import CompanySignUp from './SignIn/SignUp/CompanySignUp';
import Profile from './Profle';
import Rating from './Rating';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />,
                children: [
                    {
                        path: "",
                        element: <Schedule />
                    },
                    {
                        path: "sign-in",
                        element: <SignIn />
                    },
                    {
                        path: "sign-up",
                        element: <SignUp />
                    },
                    {
                        path: "sign-up/student",
                        element: <StudentSignUp />
                    },
                    {
                        path: "sign-up/company",
                        element: <CompanySignUp />
                    }
                ]
            },
            {
                path: "activities",
                element: <AddPage />,
                children: [
                    {
                        index: true,
                        element: <Main />
                    },
                    {
                        path: "startups",
                        element: <Startups />
                    },
                    {
                        path: "competitions",
                        element: <Competitions />
                    },
                    {
                        path: "lections",
                        element: <Lections />
                    },
                ]
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "rating",
                element: <Rating />
            },
        ]
    },
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

serviceWorkerRegistration.register();