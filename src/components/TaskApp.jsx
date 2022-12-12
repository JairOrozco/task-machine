
//Custom Hooks
import { useTodo } from "../Hooks/useTodo"

//Componentes
import { TodoList } from './TodoList'
import { TodoAdd } from "./TodoAdd"
import { NoTaskPending } from './NoTaskPending'



export const TodoApp = () => {

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
                <TodoAdd onNewTodo={ handleNewTodo } />
            </section>

            {
                (totalTodos === 0)
                    ? <NoTaskPending />
                    : <section className="todosContainer">
                        <TodoList 
                            todos={ todos }
                            onDeleteTodo={ handleDeleteTodo } 
                            onToggleTodo={ handleToggleTodo }
                        />
                    </section>
            }
            
            
        </>
    )
}
