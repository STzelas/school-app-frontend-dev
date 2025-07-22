import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import SchoolPage from "./pages/SchoolPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<SchoolPage/>}>
              <Route index element={<HomePage/>} />

              <Route path="login" element={<LoginPage/>}/>
              <Route path="register" element={<RegisterPage/>}/>

              <Route path="apps" element={<ProtectedRoute/>}>

              </Route>
              <Route path ="teachers" element={<Dashboard/>}/>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
