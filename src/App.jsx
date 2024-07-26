import Home from "./components/pages/Home";
import AddsNew from "./components/pages/AddsNew";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";


const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/add-new',
        element: <AddsNew />,
      },
      {
        path: '/edit-task/:id',
        element: <AddsNew />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
