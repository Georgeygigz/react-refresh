import React, {Component} from 'react';
import TodoItems from './TodoItem'
import PropTypes from  'prop-types'


class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos