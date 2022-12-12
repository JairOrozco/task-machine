import checked from '../assets/checked.png'
import noChecked from '../assets/no-checked.png'
import eliminated from '../assets/delete.png'


export const TaskItem = ( { todo, onDeleteTodo, onToggleTodo } ) => {
    return (
        <li  className="todoItem">

            <figure 
                className="checkTodoContainer"
                onClick={ () => onToggleTodo( todo.id ) }
            > 
                <img src={ (todo.done) ? checked : noChecked } alt="To do status" />
            </figure>

            <p
                className={`todoDescription ${ (todo.done) ?  "borderTodoCompleted" : "borderTodoNoCompleted" }` }
                > 
                    { todo.description } 
            </p>
            
            <figure 
                className="deleteTodoContainer"
                onClick={ () => onDeleteTodo( todo.id ) }
            > 
                <img src={ eliminated } alt="Delete Task" />
            </figure>

        </li>
    )
}