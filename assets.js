var todoList = {
  
	todos: [{todoText: "item 1", completed: false},{todoText: "item 2", completed: false},{todoText: "item 3", completed: false}],
	
	// displays entire todo list
  displayTodos: function() {
    if (this.todos.length ===0) {
			console.log("Your todo list is empty");
		} else {
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}	
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
	},
	
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
	
};
