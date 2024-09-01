import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";
import Blog from "../pages/blog";
import Content from "../components/Content";
import Author from "../components/Author";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
            },
            {
                path: '/blog/:id',
                element: <Blog />,
                loader: ({ params }) =>
                    fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content />,
                        loader: ({ params }) =>
                            fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path: 'author',
                        element: <Author />,
                        loader: ({ params }) =>
                            fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                ]
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />,
            },
        ]
    },
])

export default router