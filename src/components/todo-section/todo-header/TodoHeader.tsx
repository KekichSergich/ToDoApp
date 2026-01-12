import './todo-header.css';
import FilterSelect from './FilterSelect';
import AddTaskButton from './AddTaskButton';

export default function TodoHeader(){
    return (
        <div className='todo-header'>
            <AddTaskButton></AddTaskButton>
            <FilterSelect></FilterSelect>
        </div>
    )
}