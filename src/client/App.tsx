import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { CLIENT_ROUTES } from "./routes/clientRoutes";

const router = createBrowserRouter([
  ...CLIENT_ROUTES,
  {
    path: "*",
    element: <Navigate to="/" />,
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
