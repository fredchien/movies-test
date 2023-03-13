/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 13-03-2023 12:07:27
 * @modify date 13-03-2023 12:07:27
 * @desc [description]
 */
 import React, { useEffect, useState } from "react";
 import api from "../../../config/api";
 import { useAuth } from "../../../context/ContextApi";
 import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';

 function Login(){
    const { userLogged } = useAuth();
    const [user, setUser] = useState({ email: "", password: "" });
    const [loadBtn, setLoadBtn] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (userLogged === 'true') {
          document.location.href = "/home";
        } 
    }, []);

    const handleChange = (event:any) => {
        setUser((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    const handleLogin = async (e:any) => {
        e.preventDefault();
        setLoadBtn(true);
        try {
            await api.post("/login", user).then(async (res) => {
                if(res.data.success === false){
                    setMessage(res.data.message);
                    setLoadBtn(false);
                    return;
                }
                localStorage.setItem("@App:token", res.data.token);
                localStorage.setItem("@App:userActive", 'true');
                document.location.href = "/home";
                setLoadBtn(false);
            });
        } catch (error) {
            console.log(error)
            setLoadBtn(false);
        }
       
      };
      
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mt-5">
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" onChange={(event) => handleChange(event)}
                            name="email"/>
                        </Form.Group>

                        <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" onChange={(event) => handleChange(event)}
                            name="password"/>
                        </Form.Group>
                        <p className="red-value">{message}</p>
                        <Button variant="primary" type="submit" className="btn-login">
                            {
                                loadBtn ? 'Carregando...' : 'Login'
                            }
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
 }

 export default Login;