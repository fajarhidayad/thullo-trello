import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/home-page.tsx';
import LoginPage from './pages/login-page.tsx';
import MainLayout from './layouts/main-layout.tsx';
import BoardListPage from './pages/board-list-page.tsx';
import BoardPage from './pages/board-page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/signin',
    element: <LoginPage />,
  },
  {
    path: '/boards',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <BoardListPage />,
      },
      {
        path: ':id',
        element: <BoardPage />,
        id: 'board-details',
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
