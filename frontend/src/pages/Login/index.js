import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { FiPocket } from "react-icons/fi";

import "./style.css";

export default function Login(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const history = useHistory();

    function changePage(page){
        history.push(`/${page}`);
    };

    return(
        <div className="container">
            <div className="login">
                <form>
                    <header>
                        <p className="logo"><FiPocket/></p>
                        <p>Storiesbook</p>
                    </header>
                    <h1>Log in</h1>
                    <p>E-mail address</p>
                    <input
                        placeholder="you@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className="divPass">
                        <p>Password</p>
                        <p className="forget">Forgot password?</p>
                    </div>
                    <input
                        placeholder="Enter you password"
                        type="password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                    />
                    <div>
                        <input
                            type="checkbox"
                        />
                        <label for="yes">Keep me logged in</label>
                    </div>
                    <div>
                        <button type="submit" onClick={() => changePage("feed")}>Log In</button>
                    </div>
                    <p><span className="newAccount">Don't have an account?</span> <span className="goSignUp" onClick={() => changePage("register")}>Sign up</span></p>
                </form>
            </div>
        </div>
    );
}