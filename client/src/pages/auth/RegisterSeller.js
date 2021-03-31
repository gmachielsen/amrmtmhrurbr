import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

// import {toast, ToastContainer} from 'react-toastify';  ToastContainer staat bij app.js
// import "react-toastify/dist/ReactToastify.css"; staat bij app.js

const RegisterSeller = ({history}) => {

    const [role, setRole] = useState("seller");
    const [email, setEmail] = useState("");
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        if (user && user.token) history.push("/");
    }, [user, history]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true
        };

        await auth.sendSignInLinkToEmail(email, role, config);
        toast.success(
            `Email is sent to ${email}/ Click the link to complete your registration.`
        );
        // save user email in local storage
        window.localStorage.setItem("emailForRegistration", email);
        // clear state
        setEmail("");

        // save role in local storage 
        window.localStorage.setItem("roleForRegistration", role);
        // clear state 
        setRole("");
    };
    const registerForm = () => (
    <form onSubmit={handleSubmit}>
        <input type="email" className="form-control" value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)} autoFocus/>
        <input type="hidden" className="form-control" value={role} placeholder="role" onChange={(e) => setRole("seller")} autoFocus/>

        <button type="submit" className="btn btn-raised">Register </button>
    </form>
    );

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    );
};

export default RegisterSeller;