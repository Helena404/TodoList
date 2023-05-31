import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { Container } from 'react-bootstrap';


function App() {

	const [todo,setTodo] = useState([
		{
			id:1,
			title: "First task",
			status: true
		},
		{
			id:2,
			title: "Second task",
			status: true
		},
		{
			id:3,
			title: "Third task",
			status: false
		}
	]
	)

	console.log(todo)

  return (
    <Container>
		<Header/>
		<AddTodo todo={todo} setTodo={setTodo}/>
		<TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
