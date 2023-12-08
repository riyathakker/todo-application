let todo = ["Walk at 5pm", "Drink water every hour"];
let req = prompt("Enter your Request");
console.log(req);

while (req != "quit") {
    if (req == "quit") {
        console.log("Quitting app");
        break;
    }
    if (req == "list") {
        for (task of todo) {
            console.log(task);
        }
    } else if (req == "add") {
        let newtask = prompt("Enter the new task you want to add");
        todo.push(newtask);
        console.log("Task added Successfully");
    } else if (req == "delete") {
        let index = prompt("Enter the task index you want to delete");
        todo.splice(index, 1);
        console.log("Task deleted Successfully");
    } else {
        console.log("Wrong request!!");
    }
    req = prompt("Enter your Request"); // Remove the 'let' keyword here
}
