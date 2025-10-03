// Ensure the DOM is fully loaded before running code
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Add remove functionality (using onclick as required)
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeButton);

        // Append li to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listeners
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Invoke addTask on DOMContentLoaded (as per spec)
    addTask();
});
