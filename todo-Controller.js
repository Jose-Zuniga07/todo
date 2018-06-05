"user strict"

{

    function TodoController() {
        const vm = this;
        vm.todoList = [{
                name: "Wash Car",
                class: "completed"
            },
            {
                name: "Clean Dishes",
                class: ""
            },
            {
                name: "Vaccum",
                class: ""
            }
        ];

        vm.addName = function(i) {
            let name = vm.todoList[i];
            name.class = "completed";
            vm.todoList[i] = name;

        }

        vm.removeDone = function(i) {
            vm.todoList.splice(i, 1);
        }

        vm.addTodo = function(todoName) {


            console.log(todoName);
            let name = {
                name: todoName,
                class: ""
            }
            vm.todoList.push(name);
        }

    }

    angular
        .module("app")
        .controller("TodoController", TodoController);
}