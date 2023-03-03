import './App.css';
import MainPage from './containers/MainPage/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateCocktail from './containers/MainPage/components/CreateCocktail/CreateCocktail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children:[
      {
        path:"/create",
        element:<CreateCocktail/>
      }
    ]

    
  }

])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
