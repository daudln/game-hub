import { createBrowserRouter } from 'react-router-dom';
import Error from './pages/Error';
import GameDetail from './pages/GameDetail';
import HomePage from './pages/Home';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'games/:slug',
        element: <GameDetail />,
      },
    ],
  },
]);

export default router;
