// Code goes here
var todoList = {
  
	todos: [{todoText: "item 1", completed: false},{todoText: "item 2", completed: false},{todoText: "item 3", completed: false}],
	
  displayTodos: function() {
    console.log("My Todos", this.todos);
  },
	
  addTodo: function (todoText) {
    this.todos.push({
			todoText: todoText,
			completed: false
		});
    this.displayTodos();
  },
	
	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
		
		// this.todos[position] = newValue;
		this.displayTodos();
	},
	
	deleteTodos: function (position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}
	
};
