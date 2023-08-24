import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './App';
import "./index.scss";
import MainPage from './MainPage';
import AddPage from './AddPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: "add",
                element: <AddPage />
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