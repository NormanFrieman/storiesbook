import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { FiPocket, FiEye, FiEyeOff } from "react-icons/fi";

import "./style.css";

export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [eye, setEye] = useState(
        <FiEye />
    );
    const history = useHistory();

    function changePage(page){
        history.push(`/${page}`);
    };

    function changeEye(info){
        if(info.type.name === "FiEye"){
            setEye(<FiEyeOff />);
            document.querySelector("#inputPass").type = "text";
        }else{
            setEye(<FiEye />);
            document.querySelector("#inputPass").type = "password";
        }
    };

    return(
        <div className="container">
            <div className="register">
                <form>
                    <header>
                        <p className="logo"><FiPocket/></p>
                        <p>Storiesbook</p>
                    </header>
                    <h1>Sign Up</h1>
                    <p>Full name</p>
                    <input
                        placeholder="Julio Appleseed"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <p>E-mail address</p>
                    <input
                        placeholder="Enter email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p>Password</p>
                    <div className="divPass">
                        <input
                            id="inputPass"
                            placeholder="Password"
                            type="password"
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                        />
                        <p onClick={() => changeEye(eye)} className="forget">{eye}</p>
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                    <p><span className="newAccount">By signing up, you agree to our</span> <span className="goSignUp">Terms & Conditions</span></p>
                    <p><span className="newAccount">Already have an account?</span> <span className="goSignUp" onClick={() => changePage("")}>Log In</span></p>
                </form>
            </div>
        </div>
    );
}