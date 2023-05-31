import React, { useState } from 'react'
import { Col, Row, Button, FormControl } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import s from './AddTodo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-regular-svg-icons'


function AddTodo({todo,setTodo}) {
	const [value, setValue] = useState('')
	
	function saveTodo() {
		if(value) {
			setTodo(
				[...todo,{
					id: uuidv4(),
					title: value,
					status: true
				}]
			)
		}
		setValue('')
	}
  return (
	<Row>
		<Col className={s.addTodoForm}>
			<FormControl placeholder='Enter a task' value={value} onChange={ (e) => setValue(e.target.value)}/>
			<Button variant="primary" onClick={saveTodo} className={s.btn}><FontAwesomeIcon icon={faSave}/></Button>
		</Col>
	</Row>
  )
}

export default AddTodo