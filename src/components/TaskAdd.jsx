import { useForm } from "../Hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {

    const { description, inputChange, onResetForm } = useForm({ 
        description: ''
    })


    const onSubmitForm = (e) => {
        e.preventDefault();

        if( description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewTodo( newTodo )
        onResetForm();
    }

    return (

        <form className="formAddTodos__form" onSubmit={ onSubmitForm }>
        
            <input 
                type="text"
                name="description"
                placeholder="Write a task"
                className="form__input"
                value={ description }
                onChange={ inputChange }
                autoComplete='off'
            />

            <button 
                type="submit"
                className="form__button"
            >
                Add
            </button>
        
        </form>

    )
}