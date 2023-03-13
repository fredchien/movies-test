/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 13-03-2023 12:10:57
 * @modify date 13-03-2023 12:10:57
 * @desc [description]
 */
 import { BrowserRouter,
    Routes,
    Route,
    Navigate,  } from "react-router-dom";
import { useAuth } from "../src/context/ContextApi";    

//Pages
import Login from "./pages/auth/Login";
import Home from "./pages/admin/Home";

const ProtectedRoute = ( { children, user }: { children: JSX.Element, user: string } ): any => {
    if (user !== 'true') {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };

function Rotas(){
    const { userLogged } = useAuth();

    const user = userLogged;
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={
                    <ProtectedRoute user={user}>
                        <Home />
                    </ProtectedRoute>
                } />


                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;