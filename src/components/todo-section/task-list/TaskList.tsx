import TaskItem from "./TaskItem";
import '../TodoSection.css';

export default function TaskList(){
    return(
        <div className="task-list-container">
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </div>       
    )

}