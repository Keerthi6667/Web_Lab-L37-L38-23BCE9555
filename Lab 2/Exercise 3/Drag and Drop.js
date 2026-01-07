let taskCount = 0;

const columns = document.querySelectorAll(".column");
const message = document.getElementById("message");

/* Allow drop on columns */
columns.forEach(column => {
    column.addEventListener("dragover", event => {
        event.preventDefault();
    });

    column.addEventListener("drop", dropTask);
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value;

    if (taskName === "") {
        alert("Please enter task name");
        return;
    }

    const task = document.createElement("div");
    task.className = "task";
    task.id = "task" + taskCount++;
    task.draggable = true;

    const date = new Date().toLocaleDateString();
    task.innerHTML = taskName + "<br><small>" + date + "</small>";

    task.addEventListener("dragstart", dragTask);

    document.getElementById("todo").appendChild(task);
    taskInput.value = "";
    message.textContent = "";
}

function dragTask(event) {
    event.dataTransfer.setData("taskId", event.target.id);
}

function dropTask(event) {
    event.preventDefault();

    const taskId = event.dataTransfer.getData("taskId");
    const task = document.getElementById(taskId);

    event.currentTarget.appendChild(task);

    /* If dropped in Completed column */
    if (event.currentTarget.id === "completed") {
        task.style.backgroundColor = "lightgreen";
        message.textContent = "Task Completed Successfully";
    } else {
        task.style.backgroundColor = "lightblue";
        message.textContent = "";
    }
}
