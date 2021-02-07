import React, {useState, useEffect} from 'react';
import axios from "axios";
import AddTodo from "./AddTodo";
import SeeTodoList from "./SeeTodoList";

function Buttons(props) {



    const [add, setAdd] = useState(false);
    const [list, setList] = useState(false);
    const [advancedSearch, setAdvancedSearch] = useState(false);


    return (
        <>
            <div className="d-flex justify-content-center" style={{"marginTop" : "50px", "marginBottom" : "15px"}}>
                <button type="button" className="btn btn-outline-info" style={{"marginRight" : "10px"}} onClick={(e)=> {
                    e.preventDefault();
                    setAdd(!add);
                    setList(false);
                }}>Add TODO</button>
                <button type="button" className="btn btn-outline-info" onClick={(e)=> {
                    e.preventDefault();
                    setList(!list);
                    setAdd(false);
                }}>See All TODOs</button>
            </div>
            <div className="d-flex justify-content-center" style={{"marginBottom" : "25px"}}>
                <button type="button" className="btn btn-outline-info" onClick={(e) => {
                    e.preventDefault();
                    setAdvancedSearch(!advancedSearch);
                }}>Advanced Search</button>
            </div>

            <div className="d-flex justify-content-center" style={{"marginBottom" : "15px"}}>
                <div hidden={!advancedSearch}>
                <button type="button" className="btn btn-outline-success" style={{"marginRight" : "10px"}}>ACTIVE</button>
                <button type="button" className="btn btn-outline-danger" >COMPLETED</button>
                </div>
            </div>

            {add && <AddTodo/>}
            {list && <SeeTodoList/>}
        </>
    );
}

export default Buttons;