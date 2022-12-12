//Componentes
import { TaskItem } from './TaskItem'

export const TaskList = ( { todos = [], onDeleteTodo, onToggleTodo } ) => {

    return (

        <ul className="todosList">

            {
                todos.map( todo =>
                    
                    (
                        <TaskItem 
                            key={todo.id} 
                            todo={ todo }
                            onDeleteTodo={ onDeleteTodo }
                            onToggleTodo={ onToggleTodo }
                        />
                    )

                )
            }

        </ul>

    )
}
