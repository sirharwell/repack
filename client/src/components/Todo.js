import React from 'react'

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey',
  },
  pointer: { cursor: 'pointer' },
}

const Todo = ({
  id,
  complete,
  name,
  updateTodo,
  deleteTodo,
}) => (
  <div className="col s12">
    <div className="col m8">
      <div
        style={ complete ? styles.complete : {} }
        className="center"
      >
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateTodo(id)}
      />
      <label htmlFor={`item-${id}`}>Complete?</label>
    </div>
    <div
      className="col m2"
      style={styles.pointer}
      onClick={() => deleteTodo(id)}
    >
      X
    </div>
  </div>
)

export default Todo
