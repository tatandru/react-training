import logo from './logo.svg';
import './App.css';

import router from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: </Home />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
