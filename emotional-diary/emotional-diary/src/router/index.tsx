import {createBrowserRouter} from 'react-router';
import {RouterProvider} from "react-router/dom";
import Index from "../pages";
import Write from "../pages/write.tsx";
import Detail from "../pages/detail.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index/>
    },
    {
        path: '/write',
        element: <Write/>
    },
    {
        path: '/edit/:id',
        element: <Write isEdit/>
    },
    {
        path: 'detail/:id',
        element: <Detail />
    }
]);

export const AppRouter = () => <RouterProvider router={router}/>