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
	
  // adds todo items to list
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
	},
	
	//Changes all items based on completed value
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		//get number of completed todos
		for (var i=0; i<totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		// Case 1: If everything's true, make everything false
		if (completedTodos === totalTodos) {
			for (var j=0; j < totalTodos; j++) {
				this.todos[j].completed = false;
			}
		// Case 2: Otherwise, make everything true
		} else {
			for (var k=0; k < totalTodos; k++) {
				this.todos[k].completed = true;
			}
		}
		this.displayTodos();
	}
};

// Access display todos button
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

// Run displayTodos method when someone clicks the display todos button

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();  
});

toggleAllButton.addEventListener('click', function() {
	todoList.toggleAll();
});

