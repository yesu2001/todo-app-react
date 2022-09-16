import './App.css';

const ActiveTodos = ({todos,handleChecked}) => {
	const filteredTodos = todos.filter(todo => {
		if(todo.complete === false) {
			return todo
		}
	})
	return (
		<div>
			{
		        filteredTodos.length === 0 ? <span>No todos. </span>: <div className="todos">
		          {filteredTodos.map(({id,title,complete}) => (
		            <div className="todo" key={id}>
		              <input type="checkbox" defaultChecked={complete} onChange={() => handleChecked(id)}/>
		              <p className={complete===true ? 'done':''}>{title}</p>
		            </div>
		          ))}
		        </div>
		    }
		</div>
	)
}

export default ActiveTodos