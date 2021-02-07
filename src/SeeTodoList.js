import React, {useEffect, useState} from 'react';
import axios from "axios";

function SeeTodoList(props) {

    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [authentication, setAuthentication] = useState(false);

    useEffect(() => {
        axios.get("/api/list", {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(response => {
                setTodoList(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                if(err.response.status === 403){
                    setAuthentication(true);
                }
            })
    }, [isLoading])

    return (


        <div>
            {authentication && <h4 className="d-flex justify-content-center" style={{"backgroundColor" : "#e0adad"}}>PLEASE AUTHENTICATE BEFORE YOU CAN SEE THE LIST</h4>}

            <div className="d-flex justify-content-center" style={{"marginTop" : "25px"}}>
                <table>
                    <thead style={{"backgroundColor" : "#8db9e2"}}>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Done</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todoList.map((todo, index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                        <td>{todo.date}</td>
                        {todo.status === "ACTIVE" ?
                            <td style={{"color" : "green"}}><b>{todo.status}</b></td>
                            :
                            <td style={{"color" : "red"}}><b>{todo.status}</b></td>
                        }

                        <td><button type="button" className="btn  btn-outline-dark btn-sm" onClick={(e) => {
                        e.preventDefault();
                        axios.put(`/api/update-todo/${todo.id}`, null, {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token'),
                            }
                        })
                            .then(() => {
                                axios.get("/api/list", {
                                    headers: {
                                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                                    }
                                })
                                    .then(response => {
                                        setTodoList(response.data);
                                    })
                            })
                        }
                        }>Mark as completed</button></td>
                    </tr>})
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SeeTodoList;