import React, {useState} from 'react';
import axios from "axios";

function Login(props) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({
        email : "",
        password : ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        axios.post(`/api/login`, user, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then((response) => {
                if (response.status === 200){
                    setLoggedIn(true);
                    localStorage.setItem('token', response.data.token);
                    window.location.href = 'http://localhost:3000/';

                }
            })
    }

    return (
        <>
            <div className="d-flex justify-content-center" style={{"marginTop": "15px"}}>

                <form onSubmit={handleSubmit} >
                    <h1 style={{"marginTop" : "15px", "fontFamily" : "'Source Serif Pro', serif", "fontSize" : "30px"}}>User Login</h1>

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
                        <button type="button" className="btn  btn-outline-dark" style={{"marginTop" : "15px"}} onClick={handleSubmit}>Login</button>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Login;