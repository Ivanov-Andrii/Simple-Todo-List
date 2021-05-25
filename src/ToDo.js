import React from "react";

const ToDo = ({whatToDo, completed, id, toggleCompleted, deleteTodo}) => {

    const handleClickChecked = (event) => {
        toggleCompleted(event.target.id)
    }

    const handleClickDelete = (event => {
        deleteTodo(event.target.id)
    })
    return (
    <li className="todo">
        <label>
            <input type="checkbox" id={id} className={"todoCheck"} onChange={handleClickChecked} checked={completed} />
            <span className="fakeCheckbox"></span>
            <span>
                {(completed) ? <del>{whatToDo}</del> : whatToDo}
            </span>
        </label>
        <div id={id} className="todoDelete" onClick={handleClickDelete}>
            &times;
        </div>
    </li>
    )
};


export default ToDo;