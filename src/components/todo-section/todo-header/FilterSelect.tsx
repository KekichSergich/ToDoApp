import './todo-header.css';

export default function FilterSelect(){
    return (
        <select name="task-type">
            <option>Done</option>
            <option>Active</option>
            <option>All</option>
        </select>
    )
}