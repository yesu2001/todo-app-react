import {useState,useEffect} from 'react';
import './App.css';
import AllTodos from './AllTodos';
import ActiveTodos from './ActiveTodos';
import CompleteTodos from './CompleteTodos'

function App() {
  const [input,setInput] = useState('')
  const [todos,setTodos] = useState([])
  const [activeTab,setActiveTab] = useState('all');
  const [activeTodos,setActiveTodos] = useState([])
  const [completeTodos,setCompleteTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let uniqueId = Math.floor(Math.random()*100000)+new Date().getTime();
    if(!input) {
      return
    }else{
      var newTodo = {
        id: uniqueId,
        title: input.charAt(0).toUpperCase()+input.slice(1),
        complete: false,
      }
    }
    setTodos([...todos, newTodo])
    setInput('')
  }

  const handleChecked = (id) => {
      const updatedTodos = todos.map(todo => todo.id === id ? {...todo, complete:!todo.complete} : todo)
      setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
      const filters = todos.filter(todo => todo.id !== id )
      setTodos(filters)   
  }

  const deleteAll = () => {
    const filterTodos = todos.filter(todo => {
      if(todo.complete === true) {
        return todo
      }
    }) 
    const filteredArr = todos.filter(todo => !filterTodos.includes(todo))
    setTodos(filteredArr)
  }

  return (
    <div className="App">
      <header>
        <h1>#todo</h1>
      </header>
      <ul>
        <li className={activeTab==='all' ? `active` : ''} onClick={() => setActiveTab('all')}>All</li>
        <li className={activeTab==='active' ? `active` : ''} onClick={() => setActiveTab('active')}>Active</li>
        <li className={activeTab==='completed' ? `active` : ''} onClick={() => setActiveTab('completed')}>Completed</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Add details.."/>
        <button className="add_btn">Add</button>
      </form>
      {
        (function() {
          if(activeTab === 'active') {
            return <ActiveTodos todos={todos} handleChecked={handleChecked}/>
          }
          if(activeTab === 'all') {
            return <AllTodos todos={todos} handleChecked={handleChecked}/>
          }
          if(activeTab === 'completed') {
            return <CompleteTodos todos={todos} deleteAll={deleteAll} deleteTodo={deleteTodo} handleChecked={handleChecked}/>
          }
        })()
      }
    </div>
  );
}

export default App;
