
//Custom Hooks
import { useTodo } from "../Hooks/useTodo"

//Componentes
import { TaskList } from './TaskList'
import { TaskAdd } from "./TaskAdd"
import { NoTaskPending } from './NoTaskPending'



export const TaskApp = () => {

    const { todos, totalTodos, completedTodos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo()

    

    return (
        <>
            <section className="header">
                <figure className="header__containerLogo">
                    <img className="header__Logo" src="../../assets/list.png" alt="icon list" />
                </figure>
                <h1> Task Machine</h1>
            </section>

            <section className="controlTodos">
                <p className="controlTodos__text"> You have completed { completedTodos } of { totalTodos } tasks </p>
            </section>

            <section className="formAddTodos">
                <TaskAdd onNewTodo={ handleNewTodo } />
            </section>

            {
                (totalTodos === 0)
                    ? <NoTaskPending />
                    : <section className="todosContainer">
                        <TaskList 
                            todos={ todos }
                            onDeleteTodo={ handleDeleteTodo } 
                            onToggleTodo={ handleToggleTodo }
                        />
                    </section>
            }
            
            
        </>
    )
}
