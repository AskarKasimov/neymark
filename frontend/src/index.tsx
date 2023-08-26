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
import StudentSignUp from './SignIn/SignUp/StudentSIgnUp';
import CompanySignUp from './SignIn/SignUp/CompanySignUp';
import Profile from './Profle';
import Rating from './Rating';
import Internships from './AddPage/Internships';
import Market from './Market';
import CreateStartup from './AddPage/Startups/create';
import CreateLection from './AddPage/Lections/create';
import CreateCompetition from './AddPage/Competitions/create';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
            },
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
                        path: "startups/create",
                        element: <CreateStartup />
                    },
                    // {
                    //     path: "startups/:id",

                    // },
                    {
                        path: "competitions",
                        element: <Competitions />
                    },
                    {
                        path: "competitions/create",
                        element: <CreateCompetition />
                    },
                    {
                        path: "lections",
                        element: <Lections />
                    },
                    {
                        path: "lections/create",
                        element: <CreateLection />
                    },
                    {
                        path: "internships",
                        element: <Internships />
                    }
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
            {
                path: "market",
                element: <Market />
            }
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