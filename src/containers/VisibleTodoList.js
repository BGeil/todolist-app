import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter( t => !t.completed)
	}
}

const mapStatetoProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toogleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStatetoProps,
	mapDispatchToProps
	)(TodoList)

export default VisibleTodoList