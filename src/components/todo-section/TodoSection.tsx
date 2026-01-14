import './todo-header/TodoHeader';
import TodoHeader from './todo-header/TodoHeader';
import TaskList from './task-list/TaskList';

export default function TodoSection(){
    return (
        <>
            <TodoHeader/>
            <TaskList/>
        </>
    ) 
}