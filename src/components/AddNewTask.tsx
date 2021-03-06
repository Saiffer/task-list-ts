import React, {FormEvent, useState} from "react";
import { useDispatch} from "react-redux";
import { addTask, setNotification } from "../store/actions";
import { List, Task } from "../store/types";

interface AddNewTaskProps {
    list: List;
}

const AddNewTask: React.FC<AddNewTaskProps> = ({list}) => {
    const dispatch = useDispatch()
    const [taskName, setTaskName] = useState('')

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setTaskName(e.currentTarget.value)
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(taskName.trim() === '') {
            return alert("Task name is required")
        }

        const newTask: Task = {
            name: taskName,
            id: `task-${new Date().getTime()}`,
            completed: false
        }

        dispatch(addTask(newTask, list))
        dispatch(setNotification(`New task created("${newTask.name})"`))
        setTaskName("")
    }


    return(
        <section className="section">
            <h2 className="is-size-4 has-text-centered">Add new task to selected field</h2>
            <form onSubmit={submitHandler}>
                <div className="field">
                    <label htmlFor="AddTask" className="label"></label>
                    <div className="control">
                        <input name="AddTask" type="text" className="input" placeholder="Add Task" value={taskName} onChange={changeHandler} />
                    </div>
                    <div className="control mt-4">
                        <input type="submit" value="Add New Task" className="button is-primary"/>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default AddNewTask