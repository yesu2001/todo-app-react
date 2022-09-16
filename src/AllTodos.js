import './App.css';

const AllTodos = ({todos,handleChecked}) => {
	return (
		<div>
			{
		        !todos ? <span>No todos. Add some</span>: <div className="todos">
		          {todos.map(({id,title,complete}) => (
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

export default AllTodos