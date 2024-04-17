#! urs/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let todos = ["Coding", "Graphic Designing", "Social Media Marketing", "Wordpress web development", "Content Writing"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: (chalk.blueBright.bold.bgGreen("Select an option")),
            name: "select",
            choices: ["Add", "Update", "View", "Delete"]
        });
        if (ans.select == "Add") {
            let addTask = await inquirer.prompt({
                type: "input",
                message: (chalk.redBright.bold.bgCyan("Add tasks in the list")),
                name: "todo"
            });
            todos.push(addTask.todo);
            console.log(chalk.greenBright.bgCyan.italic('todos'));
        }
        if (ans.select == "Update") {
            let updateTask = await inquirer.prompt({
                type: "list",
                message: (chalk.blackBright.bgGrey("Select a task to update")),
                name: "todo",
                choices: todos.map(task => task)
            });
            let addMore = await inquirer.prompt({
                type: "input",
                message: (chalk.blueBright.bgCyan("Add task in the list")),
                name: "todo"
            });
            let newTask = todos.filter(val => val !== updateTask.todo);
            todos = [...newTask, addMore.todo];
        }
        if (ans.select == "View") {
            console.log(chalk.blackBright.bgRed.bold("********TO DO LIST**********"));
            console.log(todos);
            console.log(chalk.blackBright.bold("*******************"));
        }
        if (ans.select == "Delete") {
            let deleteTask = await inquirer.prompt({
                type: "list",
                message: (chalk.bgYellow.bgRed.bold("Delete task from the list")),
                name: "todo",
                choices: todos.map(task => task)
            });
            let Task = todos.filter(val => val !== deleteTask.todo);
            todos = [...Task];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
