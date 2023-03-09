import "./App.css";
import MainPage from "./containers/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateCocktail from "./containers/MainPage/components/CreateCocktail/CreateCocktail";
import CocktailList from "./containers/MainPage/components/CocktailList/CocktailList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/create",
        element: <CreateCocktail />,
      },
      {
        path: "/Alcoholic",
        element: <CocktailList />,
      },
      {
        path: "/Non Alcoholic",
        element: <CocktailList />,
      },
      {
        path: "/Ordinary Drink",
        element: <CocktailList />,
      },
      {
        path: "/Cocktail glass",
        element: <CocktailList />,
      },
      {
        path: "/Champagne flute",
        element: <CocktailList />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
