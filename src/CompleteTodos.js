import './App.css';

const CompleteTodos = ({todos,handleChecked,deleteTodo,deleteAll}) => {
	const filteredTodos = todos.filter(todo => {
		if(todo.complete === true) {
			return todo
		}
	})


	return (
		<div>
	        {filteredTodos.length === 0 ? <span>No tasks are completed. </span>: <div className="Completedtodos">
		          {filteredTodos.map(({id,title,complete}) => (
		            <div className="todo" key={id}>
		            	<div>
			              <input type="checkbox" defaultChecked={complete} onChange={() => handleChecked(id)}/>
			              <p className={complete===true ? 'done':''}>{title}</p>
		              	</div>
		              	<img onClick={() => deleteTodo(id)} src="https://img.icons8.com/ios-glyphs/90/000000/filled-trash.png" alt='delete icon'/>
		            </div>
		          ))}
		          <button className="delete_btn" onClick={deleteAll}>Delete All</button>
		        </div>
		    }	
		</div>
	)
}

export default CompleteTodos