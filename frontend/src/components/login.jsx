import React, {useState } from "react"; 
import { NavLink } from 'react-router-dom';
import "../components/styling/login.css";  


    
    function Login() {
        const [showPassword, setShowPassword] = useState(false);

        const handleCheckboxChange = () => {
            setShowPassword(!showPassword);
        };

        return (
            <div>
                <div className="boxV3">
                    <h1>Have an account ?</h1>
                    <form>
                        <div className="contentV3">
                            <div className="username">
                                <input type="text" placeholder="Username" className="inputTextV3" />
                            </div>
                            <div className="pass">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="inputPasswordV3"
                                />
                            </div>
                            <div className="showPass">
                                <input
                                    type="checkbox"
                                    className="nowV3"
                                    onChange={handleCheckboxChange}
                                />
                                <span>Show password</span>
                            </div>
                            <div className="boutonLoginV3">
                                <button type="submit">SIGN IN</button>
                            </div>
                            <div className="TextLogin">
                            <p>Don't have an account <span><NavLink to="/register">Register</NavLink></span> </p>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    export default Login;
