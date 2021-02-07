import React, {useState, useEffect} from 'react';
import axios from "axios";
import SeeTodoList from "./SeeTodoList";

function AddTodo(props) {

    const [todo, setTodo] = useState({
        title : "",
        description : ""
    })
    const [showList, setShowList] = useState(false);
    const [authentication, setAuthentication] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/add-todo", todo, {
            headers : {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(() => {
                setShowList(true);
            })
            .catch((err) => {
                if(err.response.status === 403){
                    setAuthentication(true);
                }
            })
    }


    return (
        <>
            {authentication && <h4 className="d-flex justify-content-center" style={{"backgroundColor" : "#e0adad"}}>PLEASE AUTHENTICATE BEFORE YOU CAN ADD TO THE LIST</h4>}

            <div className="d-flex justify-content-center" style={{"marginTop": "15px"}}>

                <div hidden={showList}>

                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="street" style={{"marginBottom": "0", "marginTop": "5px"}}>Title</label>
                        <div>
                            <input type="text" name="title" value={todo.title} onChange={e => {
                                const s = {...todo};
                                s.title = e.target.value;
                                setTodo(s);
                            }} required placeholder="Mandatory"/></div>
                    </div>
                    <div>
                <textarea  name="details" value={todo.description} required style={{"marginTop" : "15px", "width" : "209px", "height" : "100px"}} placeholder="Description"
                           onChange={e => {
                               const s = {...todo};
                               s.description = e.target.value;
                               setTodo(s);
                           }}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn  btn-outline-success" style={{"marginTop" : "15px"}} onClick={handleSubmit}>Add</button>
                    </div>

                </form>
                </div>
            </div>

            {showList && <SeeTodoList/>}
        </>
    );
}

export default AddTodo;