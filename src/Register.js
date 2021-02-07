import React, {useState, useEffect} from 'react';
import axios from "axios";

function Register(props) {


    const [emailUsed, setEmailUsed] = useState(false);
    const [register, setRegister] = useState(false);
    const [user, setUser] = useState({
        email : "",
        password : ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/register`, user)
            .then(() => {
                setRegister(true);
            })
            .then(() => {
                setTimeout(() => {
                    window.location.href = "http://localhost:3000/login";
                }, 1000)
            })
            .catch((err) => {
                if(err.response.status === 409){
                    setEmailUsed(true);
                }
            })
    }
    return (
        <>
            <div className="d-flex justify-content-center" style={{"marginTop": "15px"}}>
                <form onSubmit={handleSubmit} >
                    <h1 style={{"marginTop" : "15px", "fontFamily" : "'Source Serif Pro', serif", "fontSize" : "30px"}}>User Registration</h1>
                    {emailUsed && <div style={{"backgroundColor" : "#eab7b7", "color" : "#5e0d0d"}}>Email already use. Try another one</div>}
                    {register && <div style={{"backgroundColor" : "#abcd9a", "color" : "#0e4908"}}>Registered successfully</div>}
                    <div>
                        <label htmlFor="street" style={{"marginBottom": "0", "marginTop": "5px"}}>Email</label>
                        <div>
                            <input type="text" name="email" value={user.email} onChange={e => {
                                const s = {...user};
                                s.email = e.target.value;
                                setUser(s);
                            }} required placeholder="Mandatory"/></div>
                    </div>
                    <div>
                        <label htmlFor="street" style={{"marginBottom": "0", "marginTop": "5px"}}>Password</label>
                        <div>
                            <input type="password" name="password" value={user.password} onChange={e => {
                                const s = {...user};
                                s.password = e.target.value;
                                setUser(s);
                            }} required placeholder="Mandatory"/></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn  btn-outline-dark" style={{"marginTop" : "15px"}} onClick={handleSubmit}>Register</button>
                    </div>

                </form>
            </div>

        </>
    );
}

export default Register;