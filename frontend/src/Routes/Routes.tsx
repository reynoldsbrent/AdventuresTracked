import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import CardList from "../Components/CardList/CardList";
import HomePage from "../Pages/HomePage/HomePage";
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage";
import ProtectedRoute from "./ProtectedRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <HomePage />},
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      {path: "trips", element:<ProtectedRoute> <CardList /></ProtectedRoute>},
      {path: "trips/:tripId", element: <TripDetailsPage />}
    ],
  },
]);