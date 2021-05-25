import React, {useState} from "react";
import ToDo from "./ToDo";
import Form from "./Form";

const App = () => {
    const [task, setTask] = useState([]);

    const AddTask = (value) => {
        if(value) {
            const toDoItem = {
                key: (Math.random()*100).toString().substr(3,9),
                whatToDo: value,
                completed: false,
            }
            setTask([...task, toDoItem])
        }
    }

    const toggleCompleted = (id) =>
        setTask([...task.map (todo=>
            todo.key === id ? {...todo, completed: !todo.completed} : {...todo}
        )])

    const deleteTodo = (id) =>
        setTask([...task.filter(todo =>
            todo.key !== id
        )
        ])


    let todoList = task.map((todo) => {
        return (
            <ToDo
                key={todo.key}
                id={todo.key}
                whatToDo={todo.whatToDo}
                completed={todo.completed}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
            />
        )})


    return (
        <div className={"container-sm mt-3 p-3 border myContainer"}>
                <div className="wrap">

                    <Form AddTask={AddTask}/>
                    <ul className="todos">
                        {todoList}
                    </ul>
            </div>
        </div>
    )
}
export default App;